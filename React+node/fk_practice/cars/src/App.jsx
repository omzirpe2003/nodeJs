import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Cars from './cars.jsx';
import { Route, Routes, useNavigate } from 'react-router-dom'
import AddCar from './AddCar.jsx'


function Home(){
  const [count, setCount] = useState(0)
  const [cars,setCars]= useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    fetch('http://localhost:8080/api/v1/cars')
    .then((res)=>{
      if (!res.ok)
          throw new Error(`HTTP error: ${res.status}`);
      return res.json()
    })
    .then((data)=>{
       console.log('API response:', data);
      setCars(data)
    }
    ).catch((error) => {
        console.log("Error fetching cars:", error);
      })
  },[])

  return (
    <>
      <h1>Car Managamant</h1>
      <Cars cars={cars}/> 
      <h2>H</h2>

      <div>
        <button onClick={ ()=> navigate('/add-cars')}>Add Cars</button>
      </div>
    </>
  )
}


function App() {
  return (
    <Routes>
      <Route path='/' element ={<Home />} />
      <Route path='/add-cars' element= {<AddCar />}/>
    </Routes>
  );
}

export default App
