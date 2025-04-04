import React, { useEffect, useState } from "react";
import CitasComponent from "../../Components/Citas/citasComponent";
import EspecialidadComponent from "../../Components/Especialidades/especialidadComponent";
import CitasReservadas from "../../Components/Citas/citasReservadasComponent";
import NavBar from "../../Components/Header/navBar";
import Footer from "../../Components/Footer/footer";
import CitasServices from "../../Services/Citas/citasServices";

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

                        {vistaActiva === "reservadas" && <CitasReservadas />}
                        <Footer />
                    </div>
                </div>

            </div>
        </>

    )
}

export default Citas;