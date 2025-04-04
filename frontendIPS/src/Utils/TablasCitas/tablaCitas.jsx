import React from "react";
import { formatearFecha } from "../FormatearFecha/formatterFecha";
import { useState } from "react";
import ConfirmarReserva from "../../Components/Reservas/confirmarReserva";

const TablaCitas = ({ citas, onSeleccionarCita }) => {

    console.log(citas);
    const [citaSeleccionada, setCitaSeleccionada] = useState(null);

    {citaSeleccionada && (
        <ConfirmarReserva 
            cita={citaSeleccionada} 
            onClose={() => setCitaSeleccionada(null)}
        />
    )}

    return (
        <div>
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
                            <td colSpan="3" className="text-muted">No hay citas disponibles</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        </div>
        
    )
}
export default TablaCitas;