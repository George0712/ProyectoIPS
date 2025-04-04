import axios from "axios";

const Url = "http://localhost:5000/pacientes";

const PacientesServices = {
    async getPacientes() {
        try {
            const response = await axios.get(Url);
            return response.data;
        } catch (error) {
            console.error("Error al obtener los pacientes:", error.message);
            throw new Error("No se pudieron cargar los pacientes. Inténtalo de nuevo.");
        }
    },

    async authPaciente(documento, fechaNacimiento) {
        try {
            const response = await axios.get(Url);
            const data = response.data;

            console.log("Pacientes obtenidos:", data);

            const formattedFechaNacimiento = fechaNacimiento.split("/").reverse().join("-");

            const paciente = data.find(p => p.documento === documento && p.fechaNacimiento === formattedFechaNacimiento);

            if (paciente) {
                localStorage.setItem("id", paciente.id);
                localStorage.setItem("nombre", paciente.nombre);
                console.log("Paciente autenticado:", paciente);
                return paciente;
            } else {
                console.warn("No se encontró el paciente.");
                return null;
            }
        } catch (error) {
            console.error("Error en la autenticación del paciente:", error.message);
            throw new Error("No se pudo autenticar el paciente. Verifica los datos e inténtalo de nuevo.");
        }
    }
}

export default PacientesServices;