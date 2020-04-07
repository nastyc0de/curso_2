import React,{useState,useEffect}  from 'react';
import Question from './components/Question';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import Presupuesto from './components/Presupuesto';

function App() {
  // definir los state
  const[presupuesto,guardarPresupuesto] = useState(0);
  const [saldo, guardarSaldo] = useState(0);
  const [mostrarformulario, actualizarFormulario] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [creargasto, crearNuevoGasto] = useState(false);

  // usar el useEffect
  useEffect(() => {
    if(creargasto){
      guardarGastos([
        ...gastos,
        gasto
      ]);
      // crear una funcion para calcular el saldo
      const saldoRestante = saldo - gasto.cantidad;
      // resetear los datos del formulario
      guardarSaldo(saldoRestante);
      crearNuevoGasto(false);
    }}, [gasto,creargasto,gastos, saldo]);

  return (
   <div className='container'>
     
     <header> 
       <h1>Presupuesto General</h1>
       <div className='contenido-principal contenido'>
        { mostrarformulario ? (
          <Question 
          guardarPresupuesto={guardarPresupuesto}
          guardarSaldo={guardarSaldo}
          actualizarFormulario={actualizarFormulario}
         />
        ):
          (
            <div className="row">
              <div className="one-half column">
                <Formulario 
                  guardarGasto ={guardarGasto}
                  crearNuevoGasto={crearNuevoGasto} 
                />
              </div>
              <div className="one-half column">
                <Listado
                  gastos={gastos}
                />
                <Presupuesto
                  presupuesto={presupuesto}
                  saldo={saldo}
                />
              </div>
            </div>
          )
        }
         
         
       </div>
     </header>

   </div>
  );
}

export default App;
