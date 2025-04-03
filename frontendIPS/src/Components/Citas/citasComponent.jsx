import React, { useState } from "react";
import TablaCitas from "../../Utils/TablaCitas/tablaCitas";
import ModalReserva from "../Reservas/confirmarReserva";

const CitasComponent = ({ citas }) => {
    const [citaSeleccionada, setCitaSeleccionada] = useState(null);
    const [modalAbierto, setModalAbierto] = useState(false);

    const abrirModal = (cita) => {
        setCitaSeleccionada(cita);
        setModalAbierto(true);
    };

    return (
        <div className="container w-50 mt-5 p-5 border rounded shadow">
            <div className="d-flex flex-column svh-100">
                <h3 className="d-flex mb-4">Citas cercanas disponibles</h3>
                <div>
                    <form className="form-group" >
                        {citas.length > 0 ? <TablaCitas citas={citas} onSeleccionarCita={abrirModal} /> : <p>No hay citas disponibles</p>}
                    </form>
                </div>
            </div>
            {modalAbierto && (
                <ModalReserva 
                    cita={citaSeleccionada} 
                    onClose={() => setModalAbierto(false)} 
                />
            )}
        </div>
    );
}

export default CitasComponent;