import React from "react";
import { formatearFecha } from "../FormatearFecha/formatterFecha";
import { useState } from "react";
import ModalReserva from "../../Components/Reservas/confirmarReserva";

const TablaCitas = ({ citas, onSeleccionarCita }) => {

    console.log(citas);
    const [citaSeleccionada, setCitaSeleccionada] = useState(null);

    {citaSeleccionada && (
        <ModalReserva 
            cita={citaSeleccionada} 
            onClose={() => setCitaSeleccionada(null)}
        />
    )}

    return (
        <div className="table-responsive">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Dirección</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                    </tr>
                </thead>
                <tbody>
                    {citas.length > 0 ? (
                        citas.map((cita) => (
                            <tr key={cita.id} onClick={() => onSeleccionarCita(cita)}
                            style={{ cursor: "pointer" }}
>
                                <td>{cita.direccion}</td>
                                <td>{formatearFecha(cita.fecha)}</td>
                                <td>{cita.hora}</td>
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