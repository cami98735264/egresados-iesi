import { useEffect, useState } from "react";
import OnlyAdmin from "../../authentication/OnlyAdmin.js";
import { BarChart } from '@tremor/react';
import axios from "axios";
import './EstadisticasModulo.css';
const dataFormatter = (number) =>
    // spanish number format
    Intl.NumberFormat('es').format(number).toString();

const EstadisticasModulo = ({ userData }) => {
    const [top10Universities, setTop10Universities] = useState([]);
    const [top10Careers, setTop10Careers] = useState([]);
    useEffect(() => {
        const getTop10Universities = async () => {
            try {
                const response = await axios.get('/api/usuarios/educacion?limit=10&property=institucion');
                console.log(response.data);
                const mapped = response.data.top10.map((university) => {
                    return {
                        institucion: university.institucion,
                        "Número de veces elegida": university.frequency
                    }
                });
                console.log("Es:", mapped);
                setTop10Universities(mapped);
            } catch (error) {
                console.error(error);
            }
        }
        const getTop10Titulos = async () => {
            try {
                const response = await axios.get('/api/usuarios/educacion?limit=10&property=titulacion');
                console.log(response.data);
                const mapped = response.data.top10.map((career) => {
                    return {
                        titulo: career.titulacion,
                        "Número de veces elegida": career.frequency
                    }
                });
                console.log("Es:", mapped);
                setTop10Careers(mapped);
            } catch (error) {
                console.error(error);
            }
        }
        getTop10Titulos();
        getTop10Universities();
    }, []);

    return (
        <OnlyAdmin>
            <div className="estadisticas">
                <section>
                    <h3 className="text-lg font-medium text-tremor-content-strong">
                        Top 10 universidades más elegidas
                    </h3>
                    <BarChart
                        className="mt-6"
                        data={top10Universities}
                        index="institucion"
                        categories={["Número de veces elegida"]}
                        colors={['blue']}
                        valueFormatter={dataFormatter}
                        yAxisWidth={48}
                    />
                </section>
                <section>
                    <h3 className="text-lg font-medium text-tremor-content-strong">
                        Top 10 carreras más elegidas
                    </h3>
                    <BarChart
                        className="mt-6"
                        data={top10Careers}
                        index="titulo"
                        categories={["Número de veces elegida"]}
                        colors={['blue']}
                        valueFormatter={dataFormatter}
                        yAxisWidth={48}
                    />
                </section>
            </div>
        </OnlyAdmin>
    );
}

export default EstadisticasModulo;