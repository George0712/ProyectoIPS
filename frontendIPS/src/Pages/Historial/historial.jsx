import React from "react";

const Historial = () => {
    return (
        <div className="container w-50 mt-5 p-5 border rounded shadow">
            <h1 className="text-center">Historial de Citas</h1>
            <div className="row mt-4">
                <div className="col-md-6 offset-md-3">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Citas Anteriores</h5>
                            <p className="card-text">Aquí puedes ver el historial de tus citas anteriores.</p>
                            {/* Aquí puedes incluir la tabla de citas */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Historial;