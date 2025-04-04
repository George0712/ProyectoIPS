import React from "react";
import FiltroEspecialidad from "../../Utils/FiltoEspecialidades/filtroEspecialidad";

const EspecialidadComponent = ({ setCitas }) => {
    return (
        <div className="container w-50 mt-5 p-5 border rounded shadow">
            <h3 className="d-flex mb-4">Especialidades</h3>
            <div className="d-flex flex-row mb-4 mt-4">
                <FiltroEspecialidad setCitas={setCitas}  />
            </div>
        </div>
    )
}

export default EspecialidadComponent;