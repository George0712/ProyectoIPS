const Url = "http://localhost:5000/pacientes";

const PacientesServices = {
    async getPacientes() {
        const response = await fetch(Url);
        const data = await response.json();
        return data;
    },

    async authPaciente(documento, fechaNacimiento) {
        const response = await fetch(Url);
        const data = await response.json();
        console.log(data);

        const formattedFechaNacimiento = fechaNacimiento.split("/").reverse().join("-");

        const paciente = data.find(p => p.documento === documento && p.fechaNacimiento === formattedFechaNacimiento);

        if (paciente) {
            localStorage.setItem("id", paciente.id);
            localStorage.setItem("nombre", paciente.nombre);
            console.log(paciente);
            return paciente;
        }
        return null;
    },
};

export default PacientesServices;