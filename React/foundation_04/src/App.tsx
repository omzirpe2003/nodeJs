import { useState } from 'react'
import './App.css'



function App() {
  const [counter, setCount] = useState(0)
  function incress():void{
    if (counter < 5) {
      setCount(counter + 1);
    }
  }

  function dicress():void{
    if (counter > 0) {
      setCount(counter - 1);
    }
  }
  return (
    <div>
      <h1>Value: {counter}</h1>
      <button onClick={incress}>✅</button>
      <button onClick={dicress}>❌</button>
    </div>
  )
}

export default App
