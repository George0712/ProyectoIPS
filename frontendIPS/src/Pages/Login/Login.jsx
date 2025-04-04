import React, { useState } from 'react';
import PacientesServices from '../../Services/Pacientes/pacientesServices';
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [documento, setDocumento] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const paciente = await PacientesServices.authPaciente(documento, fechaNacimiento);

    if (paciente) {
      localStorage.setItem("pacienteId", paciente.id);
      localStorage.setItem("user", JSON.stringify(paciente[0]));
      console.log(localStorage.getItem("pacienteId"));
      navigate("/citas")
    } else {
      setError("Datos Incorrectos");
    }
  }

  return (
    <div className='container w-50 mt-5'>
      <form className='p-5 border rounded shadow'>
        <div className="d-flex justify-content-center align-items-center mb-4">
          <img src="./src/assets/emedico-logo.png" alt="Logo Emedico" width="177" height="40" />
        </div>
        {error && <p className="text-danger">{error}</p>}
        <div className='mt-5 mb-3'>
          <input className='form-control' type="text" placeholder="Documento de identidad" value={documento}
            onChange={(e) => setDocumento(e.target.value)} required />
        </div>
        <div className='mb-4'>
          <input className='form-control' type="date" value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)} required />
        </div>
        <div className='d-flex justify-content-center align-items-center mt-5'>
        <button className='btn btn-primary ' type="submit" onClick={handleSubmit} >Ingresar</button>
        </div>
        
      </form>
    </div>
  )
}

export default Login;