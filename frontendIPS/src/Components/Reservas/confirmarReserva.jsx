import React, { useState } from "react";
import CitasServices from "../../Services/Citas/citasServices";
import { formatearFecha } from "../../Utils/FormatearFecha/formatterFecha";

const ConfirmarReserva = ({ cita, onClose, cambiarVista }) => {
    const [loading, setLoading] = useState(false);
    if (!cita) return null;

    const handleConfirmarReserva = async () => {
        setLoading(true);
        const pacienteId = localStorage.getItem("pacienteId");
        console.log("ID de paciente antes de reservar:", pacienteId);
        
        const resultado = await CitasServices.ReservarCita(cita.id);
        setLoading(false);

        if (resultado.success) {
            alert("Cita reservada con éxito", cita);
            onClose();
            if (cambiarVista) cambiarVista();
        } else {
            alert(resultado.message || "Error al reservar la cita");
        }
    };

    return (
        <div className="modal show d-block position-fixed top-0 start-0 vw-100 svh-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="d-flex modal-header">
                        <h5 className="modal-title">Reservar Cita</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body d-flex flex-column">
                        <p><strong>Dirección:</strong> {cita.direccion}</p>
                        <p><strong>Fecha:</strong> {formatearFecha(cita.fecha)}</p>
                        <p><strong>Hora:</strong> {cita.hora}</p>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" onClick={onClose}>Cancelar</button>
                        <button className="btn btn-primary" disabled={loading} onClick={handleConfirmarReserva}>Confirmar Reserva</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmarReserva;
