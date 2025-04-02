const Url = "http://localhost:5000/citas";

const CitasServices = {
    async getCitas() {
        const response = await fetch(Url);
        const data = await response.json();
        return data;
    },

    async getCitasPorEspecialidad (id) {
        const response = await fetch(`${Url}?especialidadId=${id}`);
        const data = await response.json();
        return data.filter(data => data.especialidadId == id);
    },

    async ReservarCita(citaId, pacienteId, especialidadId) {
        const cita = {
            citaId,
            pacienteId: pacienteId,
            especialidadId: especialidadId,
            estadoId: 2,
            fecha: new Date().toISOString(),
            hora: new Date().toISOString(),
        };
        const response = await fetch(Url, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cita),
        });
        const data = await response.json();
        return data;
    },

    async cancelarCita(id) {
        const response = await fetch(Url + "/" + id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ idEstado: 3 }) 
        });
        const data = await response.json();
        return data;
    }
};

export default CitasServices;