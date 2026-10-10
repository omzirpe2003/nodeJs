
const objArray=[{name:"Sh",email:"de"}]

const obj={
    name: "Om Zirpe",
    email:"demo@gmail.com"
};

function addData(name,email){
    return [...objArray,{name:name, email:email}]
}
const copy={...obj}
const copy2=obj;

const result =addData("Om Zirpe","Dmo@gmail.com")  
console.log(result)
console.log(copy)
console.log(obj)
console.log(copy2)

// console.log(obj.email)
// console.log(copy.email)