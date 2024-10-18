import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let[counter,setcounter]=useState(15);
  const increase=()=>{
    if(counter<20){
      setcounter(prevCounter=> prevCounter+1);
      // setcounter(prevCounter=> prevCounter+1);
      // setcounter(prevCounter=> prevCounter+1);
      // setcounter(prevCounter=> prevCounter+1);
    }
    
  }
  const decrease=()=>{
    if(counter>0){
      setcounter(counter-1);
    }
    

    
  }
  return (
    <>
    <h1>chai aur react</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={increase}>increase</button>
    <button onClick={decrease}>decrease</button>
    </>
  )
}

export default App
