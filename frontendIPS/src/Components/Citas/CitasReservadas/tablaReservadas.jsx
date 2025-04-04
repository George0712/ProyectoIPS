import React, { useEffect, useState } from "react";
import { formatearFecha } from "../../../Utils/FormatearFecha/formatterFecha";
import EspecialidadesServices from "../../../Services/Especialidades/especialidadesServices";

const TablaReservadas = ({ citas, onCancelarCita }) => {

    const [nombresEspecialidades, setNombresEspecialidades] = useState({});

    useEffect(() => {
        const cargarEspecialidades = async () => {
            const nuevosNombres = {};

            for (const cita of citas) {
                const id = cita.idEspecialidad;
                if (!nuevosNombres[id]) {
                    try {
                        const especialidad = await EspecialidadesServices.getEspecialidad(id);
                        nuevosNombres[id] = especialidad?.nombre || "Desconocida";
                    } catch (error) {
                        nuevosNombres[id] = "Desconocida";
                        console.error("Error al cargar especialidad", error);
                    }
                }
            }

            setNombresEspecialidades(nuevosNombres);
        };

        if (citas.length > 0) {
            cargarEspecialidades();
        }
    }, [citas]);

    return (
        <div>
            <div className="table-responsive">
                <table className="table table-hover ">
                    <thead>
                        <tr>
                            <th>Direccion</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Especialidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {citas.length > 0 ? (
                            citas.map((cita) => (
                                <tr key={cita.id}
                                    onClick={() => onCancelarCita(cita.id)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <td>{cita.direccion}</td>
                                    <td>{formatearFecha(cita.fecha)}</td>
                                    <td>{cita.hora}</td>
                                    <td>{nombresEspecialidades[cita.idEspecialidad]}</td>

                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-muted">No Tiene Citas Reservadas</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default TablaReservadas;