import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Calendario = () => {
    return (
        <div className="d-flex flex-column align-items-center p-3">
            <label className="form-label">Selecciona una fecha:</label>
            <DatePicker
                inline 
                selected={new Date()}
                onChange={(date) => console.log(date)} 
            />
        </div>
    );
}
export default Calendario;
