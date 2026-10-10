
const demoObj={
    "name":"Om Zirpe",
    "email":"omzirpe@gmail.com"
}
const emailKey="email"
const nameKey="name"

//Return array of object
function demoFunction(){
    const demo="Demo"
    return [{obj:demoObj,x:demo}]
}
//return obj
// 1) Normal
function returnObj(){
    return demoObj;
}
// 2) return a new obj with {demoObj:demoObj} 
function returnAbc(){
    return {f:demoObj}
}

const [a] = demoFunction();

console.log(`Name is ${a.obj.name} and ${a.obj.email}  ${a.x}`)

const {f}=returnAbc()
console.log(f)