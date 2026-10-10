const demoObj ={
    name : "Om Zirpe",
    email: "omZire@gmail.com"
}
function demoFun(){
    return {s:demoObj, e:["Abc","FCS"]};
}

console.log(demoObj)
const {s,e} =demoFun();
console.log(`Name Is ${s.name} and email is ${s.email} and ${e[0]} and ${e[1]}`)
console.log("Demo")