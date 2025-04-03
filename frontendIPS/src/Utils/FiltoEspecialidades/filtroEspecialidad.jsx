import React, { useState, useEffect } from "react";
import EspecialidadesServices from "../../Services/Especialidades/especialidadesServices";
import CitasServices from "../../Services/Citas/citasServices";

const FiltroEspecialidad = ({ setCitas }) => {

    const [especialidades, setEspecialidades] = useState([]);
    const [selectedEspecialidad, setSelectedEspecialidad] = useState("");

    useEffect(() => {
        const fetchEspecialidades = async () => {
            try {
                const response = await EspecialidadesServices.getEspecialidades();
                setEspecialidades(response);
            } catch (error) {
                console.error("Error al obtener especialidades:", error);
            }
        };
        fetchEspecialidades();
    }, []);

    const handleEspecialidades = async (e) => {
        const especialidadSeleccionada = e.target.value;
        setSelectedEspecialidad(especialidadSeleccionada);

        if (especialidadSeleccionada !== "") {
            const especialidad = especialidades.find(
                (e) => e.nombre === especialidadSeleccionada
            )?.id;

            if (especialidad) {
                const citasPorEspecialidad = await CitasServices.getCitasByEspecialidad(especialidad);
                setCitas(citasPorEspecialidad);
            } else {
                setCitas([]);
            }
        } else {
            setCitas([]);
        }

    }

    return (
        <div className="container">
            <select
                value={selectedEspecialidad}
                onChange={handleEspecialidades}
                className="form-select"
                required>

                <option value="" >Seleccionar especialidad</option>
                {especialidades.map((especialidad) => (
                    <option key={especialidad.id} value={especialidad.nombre}>
                        {especialidad.nombre}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FiltroEspecialidad;