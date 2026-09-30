import express from 'express';
import router from './module/auth/auth.routes.js'

const app =express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/api/auth',router)
export default app;