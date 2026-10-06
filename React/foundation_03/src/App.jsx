import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import AvtCard from './conponents/avtCard.tsx';

const avatars = [
  {
    id: 1,
    name: "Nova",
    role: "Navigator",
    power: "Routing",
    initials: "NV",
  },
  {
    id: 2,
    name: "Flux",
    role: "State Keeper",
    power: "useState",
    initials: "FX",
  },
  {
    id: 3,
    name: "Memo",
    role: "Optimizer",
    power: "Memoization",
    initials: "MM",
  },
];

function Shell ({title,children}){
  return (
    <section>
      <h2>{title}</h2>
      {children}
      <p>this is for test</p>
    </section>
  );
}




function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <section>
        <Shell title="Bat Man">
          <p>This is in code children</p>
          <h2>This is also inside in children</h2>
        </Shell>
        <h1>Hello From Om Zirpe</h1>
        <section>
          {avatars.map((avt)=>(
            <AvtCard avatar={avt} level= {avt.id==1?"Caption":undefined} />
          ))}
        </section>
      </section>
    </div>
  )
}

export default App
