import axios from "axios";
import { obtenerRangoFechas } from "../../Utils/FormatearFecha/formatterFecha";

const Url = "http://localhost:5000/citas";


const CitasServices = {
    async getCitas() {
        const response = await axios.get(Url);
        return response.data;
    },

    async getCitasByEspecialidad(especialidadId) {
        try {
            const response = await axios.get(Url);
            const data = response.data;

            const { fechaInicio, fechaFin } = obtenerRangoFechas();
            console.log(`Filtrando citas de ${especialidadId} entre ${fechaInicio} y ${fechaFin}`);

            return data.filter(cita => {
                if (cita.idEstado === 3) cita.idEstado = 1;
                return Number(cita.idEspecialidad) === Number(especialidadId) && cita.fecha >= fechaInicio && cita.fecha <= fechaFin && cita.idEstado === 1;
            });
        } catch (error) {
            console.error("Error al obtener citas:", error);
            return [];
        }
    },

    async getCitasReservadas() {
        try {
            const pacienteId = localStorage.getItem("pacienteId");
            if (!pacienteId) {
                return { success: false, message: "Debe iniciar sesión para ver sus citas reservadas." };
            }

            const response = await axios.get(`${Url}?pacienteId=${pacienteId}&idEstado=2`);
            return { success: true, data: response.data };
        } catch (error) {
            console.error("Error al obtener citas reservadas:", error);
            return { success: false, message: "Ocurrió un error al obtener las citas reservadas." };
        }
    },

    async ReservarCita(citaId) {
        try {
            const pacienteId = localStorage.getItem("pacienteId");
            const citaResponse = await axios.get(`${Url}/${citaId}`);

            const cita = citaResponse.data;

            if (cita.idEstado !== 1) {
                return { success: false, message: "Esta cita ya ha sido reservada." };
            }

            const citaActualizada = { ...cita, pacienteId: Number(pacienteId), idEstado: 2 };
            await axios.put(`${Url}/${citaId}`, citaActualizada);

            console.log("Cita reservada correctamente.");
            return { success: true, message: "Cita reservada correctamente.", data: citaActualizada };
        } catch (error) {
            console.error("Error al reservar la cita:", error);
            return { success: false, message: "Ocurrió un error al reservar la cita." };
        }
    },

    async cancelarCita(id) {
        try {
            const citaResponse = await axios.get(`${Url}/${id}`);
            const citaActualizada = { ...citaResponse.data,  pacienteId: null, idEstado: 1};
            const response = await axios.put(`${Url}/${id}`, citaActualizada);
            return { success: true, data: response.data };
        } catch (error) {
            console.error("Error al cancelar la cita:", error);
            return { success: false, message: "Ocurrió un error al cancelar la cita." };
        }
    }
}

export default CitasServices;