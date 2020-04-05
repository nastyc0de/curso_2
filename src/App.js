import React,{useState}  from 'react';
import Question from './components/Question';
import Formulario from './components/Formulario';
import Listado from './components/Listado';

function App() {
  // definir los state
  const[presupuesto,guardarPresupuesto] = useState(0);
  const [saldo, guardarSaldo] = useState(0);
  const [mostrarformulario, actualizarFormulario] = useState(true);
  const [gastos, guardarGastos] = useState([]);

  //crear funcion para agregar gastos
  const crearNuevoGasto = gasto =>{
    guardarGastos([
      ...gastos,
      gasto
    ])
  }

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
                <Formulario crearNuevoGasto ={crearNuevoGasto} />
              </div>
              <div className="one-half column">
                <Listado
                  gastos={gastos}
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
