import { useState } from "react";
import { calcularTotal } from "../Helpers";

const Formulario = ({ cantidad, setCantidad, plazo, setPlazo, setTotal }) => {

    // Estado de error 
    const [error, setError] = useState(false);

    // Función para verificar la cantidad ingresada por el usuario 
    const calcularPrestamo = e => {
        e.preventDefault();
        if (cantidad <= 0 || plazo === "") {
            setError(true);
            return;
        }

        setError(false);

       const total = calcularTotal(cantidad, plazo);
       setTotal(total);
    }

    return (

        <>
            <form onSubmit={calcularPrestamo} >
                <div className="column">

                    <div>
                        <label>Cantidad Prestamo</label>
                        <input type="number" placeholder='EJ: 3000 MXN'
                            onChange={(e) => setCantidad(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Plazo para Pagar</label>
                        <select onChange={(e) => setPlazo(e.target.value)} >
                            <option value="">Seleccionar</option>
                            <option value="3">3 Meses</option>
                            <option value="6">6 Meses</option>
                            <option value="12">12 Meses</option>
                            <option value="24">24 Meses</option>
                        </select>
                    </div>
                </div>
                <div className="btnSubmit">
                    <input type="submit" value="Calcular" />
                </div>
            </form>

            {(error) ? <p className="error">Todos los campos son obligatorios</p> : ""}
        </>
    );

}

export default Formulario;