export function obtenerRangoFechas() {
    const hoy = new Date();
    const unaSemana = new Date();
    unaSemana.setDate(hoy.getDate() + 7);

    const fechaInicio = hoy.toISOString().split("T")[0];
    const fechaFin = unaSemana.toISOString().split("T")[0];

    return { fechaInicio, fechaFin };
}

export const formatearFecha = (fecha) => {
    const opciones = { weekday: 'long', day: 'numeric', month: 'long' };
    const fechaFormateada = new Date(fecha).toLocaleDateString('es-ES', opciones);

    return fechaFormateada.charAt(0).toUpperCase() + fechaFormateada.slice(1);
}