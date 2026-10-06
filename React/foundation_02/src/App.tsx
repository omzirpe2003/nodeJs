import { useState } from 'react'
import './App.css'

const shows=[
  {
    id:1,
    title:"The Componet Reyuns",
    time:"10:00 AM",
    hall:"Hall A"
  },{
    id: 2,
    title: "Attack of the Re-render",
    time: "12:30 PM",
    hall: "Hall B",
  },{
    id: 3,
    title: "Virtual DOM Nights",
    time: "04:00 PM",
    hall: "Hall C",
  }
]

function App() {
  return (
    <div>
      <section className='grid'>
        {shows.map((show)=>(
          <article>
            <p className='tag'>{show.hall}</p>
            <h3>{show.time}</h3>
            <p className='muted'>{show.title}</p>
          </article>
        ))}
      </section>
    </div>
  )
}

export default App
