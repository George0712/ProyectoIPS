import React, { useState } from "react";
import FiltroEspecialidad from "../../Utils/FiltoEspecialidades/filtroEspecialidad";
import Calendario from "../../Components/Calendario/Calendario";
import TablaCitas from "../../Utils/TablaCitas/tablaCitas";
import Historial from "../Historial/historial";

const Citas = () => {

    const [citas, setCitas] = useState([]);
    const nombre = localStorage.getItem("nombre") || "Usuario";
    console.log(citas);

    return (
        <div className="d-flex flex-column align-items-center justify-content-center svh-100">
            <div className="container w-50 mt-5 p-5 border rounded shadow">
                <h1 className="text-muted ">Bienvenido, {nombre} </h1>
                <div className="d-flex flex-row mb-4 mt-4">
                    <FiltroEspecialidad setCitas={setCitas} />
                    <Calendario />
                </div>
                <div>
                    <form className="form-group" >
                        <label className="form-label"> Citas disponibles </label>
                        <TablaCitas citas={citas} />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Citas;