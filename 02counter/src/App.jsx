import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 15;
  let [counter, setCounter] = useState(1)

  const addValue = () =>{
    if(counter < 20)
      setCounter(counter + 1);
    // console.log(counter);
  }
 
  const DecreaseValue = () =>{
    if(counter > 0)
      setCounter(counter - 1);    
  }
  return (
    <>
      <h1>Hello world!</h1>
      <h3>Counter value: {counter}</h3>
      <button onClick={addValue}>Add Value</button>
      <br /><br />
      <button onClick={DecreaseValue}>Remove value</button>
    </>
  )
}

export default App
