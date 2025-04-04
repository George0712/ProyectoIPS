import React, { useState } from "react";
import TablaCitas from "../../Utils/TablasCitas/tablaCitas";
import ConfirmarReserva from "../Reservas/confirmarReserva";

const CitasComponent = ({ citas, cambiarVista }) => {
    const [citaSeleccionada, setCitaSeleccionada] = useState(null);
    const [modalAbierto, setModalAbierto] = useState(false);
    console.log("este es el id del paciente: " + localStorage.getItem("pacienteId"));

    const abrirModal = (cita) => {
        setCitaSeleccionada(cita);
        setModalAbierto(true);
    };

    return (
        <div className="container w-50 mt-5 p-5 border rounded shadow">
            <div className="d-flex flex-column svh-100">
                <h3 className="d-flex mb-4">Citas Disponibles</h3>
                <div>
                    <form className="form-group" >
                        {citas.length > 0 
                            ? (<TablaCitas citas={citas} onSeleccionarCita={abrirModal}  />) 
                            : <p>Selecciona una especialidad para ver las citas disponibles</p>}
                    </form>
                </div>
            </div>
            {modalAbierto && (
                <ConfirmarReserva
                    cita={citaSeleccionada}
                    onClose={() => setModalAbierto(false)}
                    cambiarVista={cambiarVista}
                />
            )}
        </div>
    )
}

export default CitasComponent;