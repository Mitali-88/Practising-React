import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className='bg-green-400'>hello</h1> */}
      <Card username="Mitali"/>
      <Card username="ash"/>
      <Card username="jay" btnText="visit me"/>



    </>
  )
}

export default App
