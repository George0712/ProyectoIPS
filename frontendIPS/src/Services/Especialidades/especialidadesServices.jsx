const Url = "http://localhost:5000/especialidades";

const EspecialidadesServices = {
    async getEspecialidades() {
        const response = await fetch(Url);
        const data = await response.json();
        return data;
    },
    
    async getEspecialidad(id) {
        const response = await fetch(Url + "/" + id);
        const data = await response.json();
        return data;
    }
};  

export default EspecialidadesServices;