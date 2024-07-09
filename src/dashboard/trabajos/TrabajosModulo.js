const TrabajosModulo = () => {
    return (

        <div>
            {/* generate a table with the data */}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Fecha de Inicio</th>
                            <th>Fecha de Fin</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Trabajo 1</td>
                            <td>Descripción del trabajo 1</td>
                            <td>01/01/2021</td>
                            <td>01/02/2021</td>
                            <td>En Proceso</td>
                        </tr>
                        <tr>
                            <td>Trabajo 2</td>
                            <td>Descripción del trabajo 2</td>
                            <td>01/02/2021</td>
                            <td>01/03/2021</td>
                            <td>En Proceso</td>
                        </tr>
                        <tr>
                            <td>Trabajo 3</td>
                            <td>Descripción del trabajo 3</td>
                            <td>01/03/2021</td>
                            <td>01/04/2021</td>
                            <td>En Proceso</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TrabajosModulo;