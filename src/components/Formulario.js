import React, {useState} from 'react';

const Formulario = () => {
    const [nombre, guardarNombre]= useState('');
    const [cantidad, guardarCantidad]= useState(0);

    const agregarGasto = e =>{
        e.preventDefault();
    }
    
    return (  
        <form>
            <h2>Agrega los gastos aquí</h2>
            <div className="campo">
                <label>Nombre del gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad de gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value))}
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