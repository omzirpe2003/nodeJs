import { useState } from "react";
import { useNavigate } from "react-router-dom";




function AddCar() {

    const [name,setName]=useState('');
    const [model,setModel]= useState('');
    const [loading,setLoading]= useState(false);
    const [error, setError] = useState('');
    const navigetor = useNavigate();
    
    
    async function handelSubmit(e){
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res =await fetch('http://localhost:8080/api/v1/car',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({
                    name:name,
                    model:model
                })
            })

            if(!res.ok)
                throw new Error(`Failed to add car: ${response.status}`);
            await res.json();
            alert('Car Added Succefuuly')
            navigetor('/')
        } catch (error) {
            setError(error.message)
        }finally{
            setLoading(false)
        }

    }

    return (
    <div>
      <h1>Add New Car</h1>
      <p>Enter the details of your new car.</p>

      <form className="add-car-form" onSubmit={handelSubmit}>
        <div>
          <label>Car Name: </label>
          <input type="text" onChange={(e)=>setName(e.target.value)} id="name" required placeholder="Enter car name" value={name}/>
        </div>

        <br />

        <div>
          <label>Car Model: </label>
          <input type="text"onChange={(e)=> setModel(e.target.value)} id="model" required placeholder="Enter car model" value={model}/>
        </div>
        
        <br />

        {error && <p role="alert">{error}</p>}
        <button className="add-car-button" type="submit" disabled={loading} >{loading ? "Saving": "Save Car.!"}</button>
      </form>
    </div>
  );
}

export default AddCar;
