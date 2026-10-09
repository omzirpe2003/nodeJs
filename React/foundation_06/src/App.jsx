import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { ManualFrom } from './manualform'

function App() {
  const [tab, setTab] = useState("manual")

  return (
    <>
      <div>
        <div className="shell">
          <h1>Job Application</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ipsa?
          </p>
        </div>
        <div className="tab">
          <button onClick={()=>setTab("manual")}>Controlled - Manual</button>
          <button onClick={()=>setTab("rhf")}>React hook form</button>
        </div>
        <h1>Getting started with react</h1>
        {tab==="manual" ? <ManualFrom />:(<h2>Demo</h2>)}
      </div>
    </>
  )
}

export default App
