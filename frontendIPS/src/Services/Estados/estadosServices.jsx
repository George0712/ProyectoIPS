const Url = "http://localhost:5000/estados";

const EstadosServices = {
    async getEstados() {
        const response = await fetch(Url);
        const data = await response.json();
        return data;
    },
    
    async getEstado(id) {
        const response = await fetch(Url + "/" + id);
        const data = await response.json();
        return data;
    }
};

export default EstadosServices;