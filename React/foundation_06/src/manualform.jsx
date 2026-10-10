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
        if(Object.keys(error).length===0) setSubmit(true);
    }

    if(submited){
        return (
            <div>
                <h2>Form Submited succesfulley</h2>
                <p>Name is {value.name} </p>
                <p>Email is {value.email}</p>
            </div>
        );
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
        </div>
    );
}