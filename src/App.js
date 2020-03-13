import React,{useState}  from 'react';
import Question from './components/Question';
import Formulario from './components/Formulario';

function App() {
  // definir los state
  const[presupuesto,guardarPresupuesto] = useState(0);
  const [saldo, guardarSaldo] = useState(0);
  const [mostrarformulario, actualizarFormulario] = useState(true);

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
                <Formulario />
              </div>
              <div className="one-half column">
                2
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
