import React, { useEffect, useState } from "react";
import NavBar from "../../Components/Header/navBar";
import Footer from "../../Components/Footer/footer";
import CitasComponent from "../../Components/Citas/CitasDisponibles/citasComponent";
import CitasReservadasComponent from "../../Components/Citas/CitasReservadas/citasReservadasComponent";
import EspecialidadComponent from "../../Components/Especialidades/especialidadComponent";

const Citas = () => {
    const [citas, setCitas] = useState([]);
    const [vistaActiva, setVistaActiva] = useState("disponibles");

    useEffect(() => {
            
        if (vistaActiva === "disponibles") {
            setCitas([]);
        }
    }, [vistaActiva]);

    return (
        <>
            <div>
                <div className='d-flex flex-column min-vh-100'>
                    <div className='main-content'>
                        <NavBar setVistaActiva={setVistaActiva} />
                        {vistaActiva === "disponibles" && (
                            <>
                                <EspecialidadComponent setCitas={setCitas} />
                                <CitasComponent citas={citas} cambiarVista={() => setVistaActiva("reservadas")} />
                            </>
                        )}

                        {vistaActiva === "reservadas" && <CitasReservadasComponent />}
                        <Footer />
                    </div>
                </div>

            </div>
        </>

    )
}

export default Citas;