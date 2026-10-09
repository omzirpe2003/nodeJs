import { useState } from "react"

export const ManualFrom = ()=>{

    const [values,setValues]=useState({
        name : "",
        email:"",
        role: "Fronted",
        experoence:"",
        cover:""
    });
    const [submitted, setSubmitted] = useState(false);
    const [errors, SetErrors] = useState({});
    function validate(v){
        const e= {};
        if(!v.name.trim())e.name="Name is required";
        if(!v.email.trim())e.email="Email is required";
        return e;
    }
    function set(filed){
        return (e)=> setValues((v)=>({...v,[filed]:e.target.value}));
    }

    function submit(e){
        e.preventDefault();
        const e = validate(values);
        SetErrors(e);
        if(Object.keys(e).length === 0) setSubmitted(true);
        
    }
    

    return (
        <div>
            <form noValidate onSubmit={submit}>
                <label>
                    Full Name
                    <input required value={values.name} onChange={set("name")}/>
                </label>
                <label>
                    Email
                    <input required value={values.email} onChange={set("email")} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
