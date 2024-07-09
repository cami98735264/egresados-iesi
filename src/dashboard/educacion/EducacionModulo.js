import { useEffect, useState } from "react";
import "./EducacionModulo.css";
import axios from "axios";

const EducacionModulo = ({ userData }) => {
  const { isAdmin } = !userData ? { isAdmin: false } : userData;
  console.log(userData)
  const [departamentos, setDepartamentos] = useState([]);
  const [ciudades, setCiudades] = useState([]);
  const [currentDepartamento, setCurrentDepartamento] = useState(null);
  const [currentCiudadId, setCurrentCiudadId] = useState(null);
  const [currentCiudad, setCurrentCiudad] = useState(null);
  const [usuarios, setUsuarios] = useState([]);
  const [nivelAcademico, setNivelAcademico] = useState(null);
  const [universidadCodigo, setUniversidadCodigo] = useState(null);
  const [programasAcademicos, setProgramasAcademicos] = useState([]);
  const [nivelFormacion, setNivelFormacion] = useState(null);
  const [titulo, setTitulo] = useState(null); //programa academico [titulo obtenido
  const [añoInicio, setAñoInicio] = useState(null);
  const [educacion, setEducacion] = useState([]);
  const [añoFin, setAñoFin] = useState(null);
  const [unmutableEducacion, setUnmutableEducacion] = useState([]);

  const [universidad, setUniversidad] = useState(null);
  const [universidades, setUniversidades] = useState([]);


  const handleTituloChange = (e) => {
    const titulo = e.target.value;
    setTitulo(titulo);
  }

  const handleSubmitEducacion = async (e) => {
    console.log("hola")
    e.preventDefault();
    try {
      //     const { institucion, titulacion, fecha_inicio, fecha_fin, nivel_academico, nivel_formacion, ciudad_id, municipio_id } = req.body;
      const response = await axios.post("/api/usuarios/addEducacion", {
        institucion: universidad,
        titulacion: titulo,
        fecha_inicio: añoInicio,
        fecha_fin: añoFin,
        nivel_academico: nivelAcademico,
        nivel_formacion: nivelFormacion,
        ciudad_id: currentCiudadId,
        departamento_id: currentDepartamento
      }, {
        withCredentials: true
      });
      window.alert("Datos añadidos exitosamente!");
      // add educacion to educacion state
      console.log(response.data.educacion);
      setEducacion([...educacion, response.data.createdEducacion]);
      //close modal
      document.getElementById('my_modal_5').close();
    } catch (err) {
      if (err.response.data) {
        window.alert(err.response.data.message);
      }
      console.error(err);
    }
  }
  useEffect(() => {
    const getEducacion = async () => {
      try {
        const response = await axios.get("/api/usuarios/educacion", {
          withCredentials: true
        });
        console.log(response.data.educacion);
        setEducacion(response.data.educacion);
        setUnmutableEducacion(response.data.educacion);
      } catch (err) {
        console.error(err);
      }
    }
    const getDepartamentos = async () => {
      try {
        const response = await axios.get("/api/info/departamentos");
        setDepartamentos(response.data.departamentos);
        console.log(response.data.departamentos);
      } catch (err) {
        console.error(err);
      }
    }
    const getUsuarios = async () => {
      try {
        const response = await axios.get("/api/usuarios/all_users", {
          withCredentials: true
        });
        setUsuarios(response.data.users);
      } catch (err) {
        console.error(err);
      }
    };
    if (isAdmin) {
      getUsuarios();
    }
    getDepartamentos();
    getEducacion();
  }, []);

  const handleAñoInicioChange = (e) => {
    const año_inicio = e.target.value;
    setAñoInicio(año_inicio);
  }
  const handleAñoFinChange = (e) => {
    const año_fin = e.target.value;
    setAñoFin(año_fin);
  }
  const handleNivelFormacionChange = async (e) => {
    const programaAcademicoSelect = document.getElementById("programaAcademicoSelect");
    programaAcademicoSelect.selectedIndex = 0;
    const nivel_formacion = e.target.value;
    setNivelFormacion(nivel_formacion);
    try {
      const response = await axios.get(`https://www.datos.gov.co/resource/upr9-nkiz.json?codigoinstitucion=${universidadCodigo}&nombrenivelformacion=${nivel_formacion}&nombrenivelacademico=${nivelAcademico}`);
      setProgramasAcademicos(response.data);

    } catch (err) {
      console.error(err);
    }
  }
  const handleUserChange = async (e) => {
    const user_id = e.target.value;
    try {
      const response = await axios.get(`/api/usuarios/educacion?persona_id=${user_id}`, {
        withCredentials: true
      });
      setEducacion(response.data.educacion);
      setUnmutableEducacion(response.data.educacion);
    } catch (err) {
      console.error(err);
    }
  }
  const handleUniversidadChange = (e) => {
    const nivelAcademicoSelect = document.getElementById("nivelAcademicoSelect");
    nivelAcademicoSelect.selectedIndex = 0;
    const universidad_texto = e.target.options[e.target.selectedIndex].text;
    const universidad_codigo = e.target.value;
    console.log(universidad_codigo);
    setUniversidadCodigo(universidad_codigo);
    setUniversidad(universidad_texto);
  };
  const handleNivelAcademicoChange = async (e) => {
    const nivel_formacionSelect = document.getElementById("nivelFormacionSelect");
    nivel_formacionSelect.selectedIndex = 0;

    const nivel_academico = e.target.value;
    setNivelAcademico(nivel_academico);
  };
  const handleDepartamentoChange = async (e) => {
    const ciudadSelect = document.getElementById("ciudadSelect");
    ciudadSelect.selectedIndex = 0;
    const departamento_id = e.target.value;
    setCurrentDepartamento(departamento_id);
    try {
      const response = await axios.get(`/api/info/ciudades?departamento_id=${departamento_id}`);
      setCiudades(response.data.ciudades);
    } catch (err) {
      console.error(err);
    }
  }
  const handleSearchChange = (e) => {
    const search = e.target.value;
    const allValues = unmutableEducacion.map((educacion) => {
      // return all values in educacion object
      return [educacion.institucion, educacion.titulacion, educacion.nivel_formacion, educacion.nivel_academico, educacion.fecha_inicio, educacion.fecha_fin, educacion.ciudade.nombre, educacion.departamento.nombre];
    });
    const filteredEducation = allValues.filter((values) => {
      return values.join(" ").toLowerCase().includes(search.toLowerCase());
    }).map((values) => {
      return unmutableEducacion[allValues.indexOf(values)];
    });

    console.log(filteredEducation);
    setEducacion(filteredEducation);
  }
  const handleCiudadChange = async (e) => {
    const universidadSelect = document.getElementById("universidadSelect");
    universidadSelect.selectedIndex = 0;
    const ciudad_id = e.target.value;
    const ciudad_texto = e.target.options[e.target.selectedIndex].text;
    setCurrentCiudadId(ciudad_id);
    setCurrentCiudad(ciudad_texto);
    try {
      const getUniversidades = await axios.get(`https://www.datos.gov.co/resource/n5yy-8nav.json?municipio_domicilio=` + ciudad_texto);
      setUniversidades(getUniversidades.data);
      console.log(getUniversidades.data);
      console.log(universidades);
    } catch (err) {
      console.error(err);
    }

  }

  return (
    <div className="modulo_educacion">
      <div className="flex justify-between flex-wrap">
        {!isAdmin ? <button className="btn btn-info" onClick={() => document.getElementById("my_modal_5").showModal()}>Añadir Dato</button> : <select className="select select-bordered w-full max-w-xs" onChange={handleUserChange}>
          <option disabled selected>Seleccione un usuario</option>
          {usuarios.map((usuario) => {
            return (
              <option key={usuario.id} value={usuario.id_usuario}>{usuario.nombres} {usuario.apellidos}</option>
            );

          })}
        </select>}
        {/* search input */}
        <input type="text" className="input input-bordered w-80" placeholder="Buscar" onChange={handleSearchChange} />
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Institución</th>
              <th>Titulación</th>
              <th>Nivel de Formación</th>
              <th>Nivel Académico</th>
              <th>Fecha de inicio</th>
              <th>Fecha de finalización</th>
              <th>Ciudad</th>
              <th>Departamento</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {educacion.map((educacion, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{educacion.institucion}</td>
                  <td>{educacion.titulacion}</td>
                  <td>{educacion.nivel_formacion}</td>
                  <td>{educacion.nivel_academico}</td>
                  <td>{educacion.fecha_inicio}</td>
                  <td>{educacion.fecha_fin}</td>
                  <td>{educacion.ciudade.nombre}</td>
                  <td>{educacion.departamento.nombre}</td>
                  <td>
                    {/* trash icon button */}
                    <button className="btn btn-error btn-sm" onClick={async () => {
                      try {
                        const response = await axios.post("/api/usuarios/deleteEducacion", {
                          id: educacion.id,
                          id_persona: educacion.persona_id
                        }, {
                          withCredentials: true
                        });
                        console.log(response.data.message);
                        const filtered = unmutableEducacion.filter((edu) => {
                          return edu.id !== educacion.id;
                        });
                        setEducacion(filtered);
                        setUnmutableEducacion(filtered);


                      } catch (err) {
                        console.error(err);
                      }
                    }}>Eliminar</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box w-1/2">
          <h3 className="font-bold text-lg">Añade tus datos</h3>
          <form className="educacion_formulario">
            <div className="joined">
              <div>
                <label className="label text-sm">Departamento</label>
                <select className="select select-bordered w-full max-w-xs departamentos_select" onChange={handleDepartamentoChange} id="departamentoSelect">
                  <option disabled selected>Selecciona el departamento</option>
                  {departamentos.map((departamento) => {
                    return (
                      <option key={departamento.id + departamento.pais_id} value={departamento.id}>{departamento.nombre}</option>
                    );
                  })}
                </select>
              </div>
              <div>
                <label className="label text-sm">Ciudad</label>
                <select className="select select-bordered w-full max-w-xs" onChange={handleCiudadChange} id="ciudadSelect">
                  <option disabled selected>Selecciona la ciudad</option>
                  {ciudades.map((ciudad) => {
                    return (
                      <option key={ciudad.id} value={ciudad.id}>{ciudad.nombre}</option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div>
              <label className="label text-sm ">Universidad</label>
              <select className="select select-bordered w-full" onChange={handleUniversidadChange} id="universidadSelect">
                <option disabled selected>Selecciona la universidad</option>
                {universidades.map((universidad) => {
                  return (
                    <option key={universidad.c_digo_instituci_n} value={universidad.c_digo_instituci_n}>{universidad.nombre_instituci_n}</option>
                  );
                })}
              </select>
            </div>
            <div className="joined">
              <div>
                <label className="label text-sm">Nivel académico</label>
                <select className="select select-bordered w-full max-w-xs" onChange={handleNivelAcademicoChange} id="nivelAcademicoSelect">
                  <option disabled selected>Selecciona el nivel académico</option>
                  {universidades.length && <>
                    <option value="Pregrado">Pregrado</option>
                    <option value="Posgrado">Posgrado</option>
                  </>}
                </select>
              </div>
              <div>
                <label className="label text-sm">Nivel de formación</label>
                <select className="select select-bordered w-full max-w-xs" onChange={handleNivelFormacionChange} id="nivelFormacionSelect">
                  <option disabled selected>Selecciona el nivel de formación</option>
                  {nivelAcademico && (nivelAcademico === "Pregrado" ? <>
                    <option value="Formación técnica profesional">Formación técnica profesional</option>
                    <option value="Tecnológica">Tecnológica</option>
                    <option value="Universitaria">Universitaria Profesional</option>
                  </> : <>
                    <option value="Especialización universitaria">Especialización universitaria</option>
                    <option value="Maestría">Maestría</option>
                    <option value="Doctorado">Doctorado</option>
                  </>)}
                </select>
              </div>
            </div>
            <div>
              <label className="label text-sm">Título obtenido</label>
              <select className="select select-bordered w-full" onChange={handleTituloChange} id="programaAcademicoSelect">
                <option disabled selected>Selecciona el programa académico</option>
                {programasAcademicos.map((programa) => {
                  return (
                    <option key={programa.codigoinstitucion} value={programa.nombretituloobtenido}>{programa.nombretituloobtenido}</option>
                  );
                })}
              </select>
            </div>
            <div className="joined">
              <div>
                <label className="label text-sm">Año de inicio</label>
                <input type="number" className="input input-bordered" placeholder="Año de inicio" onChange={handleAñoInicioChange} />
              </div>
              <div>
                <label className="label text-sm">Año de finalización</label>
                <input type="number" className="input input-bordered" placeholder="Año de finalización" onChange={handleAñoFinChange} />
              </div>
            </div>
          </form>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm" onClick={() => {
              document.getElementById('my_modal_5').close();
            }}>Cerrar</button>
            <button type="submit" className="btn btn-primary btn-sm " onClick={handleSubmitEducacion}>Guardar</button>
          </div>
        </div>
      </dialog>
    </div>

  );
};


export default EducacionModulo;