import { useState } from "react";

export function ManualFrom(){

    
    const [value,setValue]=useState(
       {
        name:"",

        email:""
       } 
    )

    const [submited,setSubmit]=useState(false);
    const [errors,setErrors]=useState({});
    const [data,setData]=useState([])

    function validation(v){
        const e={};
        if(!v.name.trim()) e.name="Name is requird"
        if(!v.email.trim()) e.email="Email is requird"
        return e;
    }
    function submit(ev){
        ev.preventDefault();
        const error=validation(value)
        setErrors(error);
        if(Object.keys(error).length===0) {
            setData((e)=>[...e,{...value}]);
            setValue({name:"",email:""})
            setSubmit(true);
        }
    }

    

    return (
        <div>
            <form onSubmit={submit}>
                <label >
                    Name
                </label>
                <input type="text" name="name" id="" value={value.name} onChange={(e)=> setValue((v)=> ({...v,["name"]: e.target.value}))}/>
                {errors.name && <p>{errors.name}</p>}
                <br />
                <br />
                <label >
                    email
                </label>
                <input type="email" name="email" id="" value={value.email} onChange={(e)=> setValue((v)=> ({...v,["email"]: e.target.value}))}/>
                {errors.email  && <p>{errors.email}</p>}
                <br /><br />
                <input type="submit" name="submit" id=""/>
            </form>
            <br />
            {data.map((e, index) => (
            <div key={index}>
                <p>Name is {e.name}</p>
                <p>Email is {e.email}</p>
                <hr />
            </div>
        ))}
        </div>
    );
}