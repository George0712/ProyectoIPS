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

    if(paciente){
      navigate("/citas")
    }else{
      setError("Datos Incorrectos");
    }
  }

  return (
    <div className='container w-50 mt-5'>
      <form className='p-5 border rounded shadow'>
        <h2 className='mb-4'>Buscar citas disponibles</h2>
        {error && <p className="text-danger">{error}</p>}
        <div className='mb-3'>
            <input className='form-control' type="text" placeholder="Documento de identidad" value={documento}
            onChange={(e) => setDocumento(e.target.value)} required/>
        </div>
        <div className='mb-4'>
            <input className='form-control' type="date" value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)} required/>
        </div>
        
        <button className='btn btn-primary' type="submit" onClick={handleSubmit} >Ingresar</button>
      </form>
    </div>
  );
}

export default Login;