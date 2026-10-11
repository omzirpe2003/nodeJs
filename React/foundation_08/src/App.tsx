import * as react from 'react'
import './App.css'
import { useRandomUser } from './hook/getUserHook.jsx';

function App() {
  
  const [value,setValue] = react.useState<number>(0);
  const {user,getRandomUser }=useRandomUser();

  function handelIncepent(){
    if(value<=100)
      setValue(value+1);
  }

  function handelDeciment(){
    if(value>0)
      setValue(value - 1);
  }
  return (
    <>
      <h1>Hello from H!</h1>
      <p>{value}</p>
      <button onClick={getRandomUser}>Get User</button>
      {user ? <p>{user.name.first}</p>:<p>No User</p>}
      <button onClick={handelIncepent}>Increment</button>
      <br />
      <button onClick={handelDeciment}>Decrement</button>

    </>
  )
}

export default App
