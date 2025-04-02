import React from "react";

const TablaCitas = ({ citas }) => {

    console.log(citas);

    return (
        <div className="border rounded shadow table-responsive">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Dirección</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {citas.length > 0 ? (
                        citas.map((cita) => (
                            <tr key={cita.id}>
                                <td>{cita.direccion}</td>
                                <td>{cita.fecha}</td>
                                <td>{cita.hora}</td>
                                <td>{cita.estado}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-muted">No hay citas disponibles</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
export default TablaCitas;