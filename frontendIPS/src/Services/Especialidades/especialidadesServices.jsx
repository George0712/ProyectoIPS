import axios from "axios";

const Url = "http://localhost:5000/especialidades";

const EspecialidadesServices = {
    async getEspecialidades() {
        try {
            const response = await axios.get(Url);
            return response.data || []; // Asegúrate de que siempre devuelva un array
        } catch (error) {
            console.error("Error al obtener especialidades:", error);
            throw error;
        }
    },

    async getEspecialidad(id) {
        try {
            const response = await axios.get(`${Url}/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error al obtener la especialidad con id ${id}:`, error);
            throw error;
        }
    }
}

export default EspecialidadesServices;