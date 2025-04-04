import React, { useEffect, useState } from "react";

const NavBar = ({ setVistaActiva }) => {
    const [pacienteNombre, setPacienteNombre] = useState("");

    useEffect(() => {
        const nombre = localStorage.getItem("nombre") || "Usuario";
        setPacienteNombre(nombre);
    }, []);

    return (
        <nav className="navbar navbar-expand-lg mt-4">
            <div className="container d-flex justify-content-between align-items-center w-100">

                <div className="position-absolute start-50 translate-middle-x">
                    <a className="navbar-brand" href="#" onClick={(e) => {
                        e.preventDefault(); setVistaActiva("disponibles");
                    }}>
                        <img src="./src/assets/emedico-logo.png" alt="Logo Emedico" width="177" height="40" />
                    </a>
                </div>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <li className="collapse navbar-collapse nav-item ms-3">
                    <span className="nav-link ">Bienvenido, {pacienteNombre}</span>
                </li>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item" onClick={(e) => { e.preventDefault(); setVistaActiva("reservadas"); }}>
                            <a className="nav-link fw-medium" href="#">Mis Reservas</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;