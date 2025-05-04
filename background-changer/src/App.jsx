import { useState } from "react"

function App() {
  const [color, setColor] = useState("pink")

  return (
    <div className="w-full h-screen" style={{backgroundColor:color}}>
     <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0">
      <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounder-3xl">
      <button className="outline-none px-4 py-1 rounded-full text-white" style={{background:"black"}} onClick={()=> setColor("black")}>black</button>
      <button className="outline-none px-4 py-1 rounded-full text-black" style={{background:"white"}} onClick={()=> setColor("white")}>white</button>
      <button className="outline-none px-4 py-1 rounded-full text-white" style={{background:"purple"}}onClick={()=> setColor("purple")}>purple</button>
      <button className="outline-none px-4 py-1 rounded-full text-white" style={{background:"olive"}} onClick={()=> setColor("olive")}>olive</button>
      <button className="outline-none px-4 py-1 rounded-full text-black" style={{background:"yellow"}}onClick={()=> setColor("yellow")}>yellow</button>
      <button className="outline-none px-4 py-1 rounded-full text-white" style={{background:"red"}}onClick={()=> setColor("red")}>red</button>
      <button className="outline-none px-4 py-1 rounded-full text-white" style={{background:"pink"}}onClick={()=> setColor("pink")}>pink</button>
      <button className="outline-none px-4 py-1 rounded-full text-white" style={{background:"blue"}}onClick={()=> setColor("blue")}>blue</button>
      
      
      </div>
      </div>
    </div>
    
  )
}

export default App
