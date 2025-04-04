import React, { useEffect, useState } from "react";
import CitasServices from "../../Services/Citas/citasServices";
import TablaCitasReservadas from "../../Utils/TablasCitas/tablaReservadas";


const CitasReservadasComponent = () => {
  const [citasReservadas, setCitasReservadas] = useState([]);

  const cargarCitas = async () => {
    const response = await CitasServices.getCitasReservadas();

    if (response.success) {
      setCitasReservadas(response.data);
    } else {
      console.error(response.message);
    }
  };

  useEffect(() => {
    cargarCitas();
  }, []);

  const cancelarCita = async (id) => {
    const confirmacion = window.confirm("¿Estás seguro de que quieres cancelar esta cita?");
    if (!confirmacion) return;

    const response = await CitasServices.cancelarCita(id);
    if (response.success) {
      alert("Cita cancelada exitosamente.");
      cargarCitas();
    } else {
      alert(response.message);
    }
  };

  return (
    <div className="container w-50 mt-5 p-5 border rounded shadow">
      <h3 className="d-flex mb-4">Mis Citas Reservadas</h3>

      {citasReservadas.length === 0 ? (
        <p>No tienes citas reservadas. </p>
      ) : (
        <TablaCitasReservadas citas={citasReservadas} onCancelarCita={cancelarCita}/>
        
      )}
    </div>
  )
}

export default CitasReservadasComponent;