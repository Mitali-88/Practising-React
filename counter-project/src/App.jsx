import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const [count, setCount] = useState(0)
const addValue = ()=>{
  if(count < 20){
    setCount(count+1)
  }
}
const minusValue = ()=>{
  if(count>0){
    console.log("here")
    setCount(count-1)
  
  }
 console.log("hey",count)
}
  return (
    <>
      
      <h1>Hello</h1>
      <h2>Counter value: {count}</h2>
      <button onClick={addValue}>increase value</button>
      <button onClick={minusValue}>decrease value</button>
    </>
  )
}

export default App
