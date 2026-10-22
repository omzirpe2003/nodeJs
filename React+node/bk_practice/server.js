import express, { Router } from 'express';
import http from 'http';
import cros from 'cors';

const app =express();
const PORT  =8080;

const router =Router();
app.use(cros())

app.use('/api/v1',router);


const cars =[
    {
        id: 1,
        name: "TATA",
        model: "I20"
    },
    {
        id: 2,
        name : "Sufary",
        model : "AVC"
    },
    {
        id: 3,
        name : "Suzuki",
        model: "irtica"
    }

]


router.get('/cars',(req,res)=>{
    res.send(cars);
})


router.post('/car',(req,res)=>{
    const {name,model}= req.body();
    
    if(! name || !model)
        res.status(404).send("Not Found")

    const newCar={
        name:name,
        model:model
    };
    
    cars.push(newCar);
    res.send(newCar);

})


router.delete(`/cars/:id`,(req,res) =>{
    const id = Number(req.params.id);
    const index = cars.findIndex((car)=> car.id===id);
    if(index===-1)
        res.status(404).send("Not Found")

    const deletedCar = cars.splice(index,1);
    res.send(`Delete Car ${deletedCar}`)

})


router.put(`/cars/:id`,(req,res) =>{
    res.send(`Id is ${req.params.id}`);
})


router.get('/:id',(req,res)=>{
    const id =Number(req.params.id);
    const  car= cars.find((car)=> car.id===id);
    if(!car)
        res.status(404).send("Not Found");

    res.send(`${car}`);
});

app.listen(PORT,()=>{
    console.log(`Server is runing on http://localhost:${PORT}`)    
})