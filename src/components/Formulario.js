import React, {useState} from 'react';

const Formulario = () => {
    return (  
        <form>
            <h2>Agrega los gastos aquí</h2>
            <div className="campo">
                <label>Nombre del gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                />
            </div>
            <div className="campo">
                <label>Cantidad de gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                />
            </div>
            <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Agregar"
                >
            </input>
        </form>
    );
}
 
export default Formulario;