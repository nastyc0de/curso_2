import React,{Fragment,useState} from 'react';
import Error from './Error';

const Question = ({guardarPresupuesto, guardarSaldo, actualizarFormulario}) => {

    //Definir el state
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);
    
    //Funcion que define un presupuesto
    const definirPresupuesto = e=>{
        guardarCantidad(parseInt(e.target.value, 10))
    }
    
    //Crear un submit para definir un presupuesto
    const agregarPresupuesto = e =>{
        e.preventDefault();

        // Validar datos
        if (cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }
        // Si se pasa la validacion
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarSaldo(cantidad);
        actualizarFormulario(false);

    }
    return ( <Fragment>
        <h2>Ingrese su presupuesto</h2>
        {error ?<Error mensaje='Hubo un error en el presupuesto'/> :null}
        <form onSubmit={agregarPresupuesto}> 
            <input type="number" 
                    className="u-full-width" 
                    placeholder="ingresa el presupuesto"
                    onChange={definirPresupuesto}
            />
            <input type="submit" className="button-primary u-full-width" value="Definir Presupuesto"/>
        </form>
    </Fragment> );
}
 
export default Question;