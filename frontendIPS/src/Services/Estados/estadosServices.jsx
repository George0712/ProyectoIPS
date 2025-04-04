import axios from "axios";

const Url = "http://localhost:5000/estados";

const EstadosServices = {
    async getEstados() {
        try {
            const response = await axios.get(Url);
            return response.data;
          } catch (error) {
            console.error("Error al obtener los estados:", error.message);
            throw new Error("No se pudieron cargar los estados. Inténtalo de nuevo.");
          }
      },
    
      async getEstado(id) {
        try {
            const response = await axios.get(`${Url}/${id}`);
            return response.data;
          } catch (error) {
            console.error(`Error al obtener el estado con ID ${id}:`, error.message);
            throw new Error(`No se pudo cargar el estado con ID ${id}.`);
          }
      },
    
}

export default EstadosServices;