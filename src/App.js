import './App.css';
import Boton from './componentes/boton/boton'
import Pantalla from './componentes/pantalla/pantalla';
import BotonClear from './componentes/clear/clear';
import { useState } from 'react';
import { evaluate} from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const resultado = () =>{

    if (input){
      setInput(evaluate(input));
    } else{
      alert('Ingrese valores para realizar el calculo n.n')
    };
    
  };

  return (
    <div className='App'>
      <div className='calculadora-container'>

        <Pantalla input={input}/>

        
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={resultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>CLEAR</BotonClear>
          <div className='parentesis'>
          <Boton manejarClic={agregarInput}>(</Boton>
          <Boton manejarClic={agregarInput}>)</Boton>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
