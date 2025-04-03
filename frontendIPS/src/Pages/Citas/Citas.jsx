import React, { useState } from "react";
import CitasComponent from "../../Components/Citas/citasComponent";
import EspecialidadComponent from "../../Components/Especialidades/especialidadComponent";

const Citas = () => {
    const [citas, setCitas] = useState([]);

    return (
        <>
            <EspecialidadComponent setCitas={setCitas} />
            <CitasComponent citas={citas} />
            
        </>
        
    );
}

export default Citas;