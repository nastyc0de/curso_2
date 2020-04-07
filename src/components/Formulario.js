import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({guardarGasto, crearNuevoGasto}) => {
    const [nombre, guardarNombre]= useState('');
    const [cantidad, guardarCantidad]= useState(0);
    const [error, guardarError] = useState(false);

    const agregarGasto = e =>{
        e.preventDefault();

        //validar los campos
        if (cantidad <1 || isNaN(cantidad) || nombre.trim() ==='') {
            guardarError(true);
            return;
        }
        guardarError(false);
        
        //crear un nuevo gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }
        
        //agregar un nuevo gasto
        guardarGasto(gasto);
        crearNuevoGasto(true);


        //resetear el formulario
        guardarNombre('');
        guardarCantidad(0);
    }
    
    return (  
        <form onSubmit={agregarGasto}>
            <h2>Agrega los gastos aquí</h2>
            { error ? <Error mensaje="error"/>:null}
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