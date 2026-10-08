

import express from "express";
import { authRouter } from "./auth/auth.router.js";
import { notFound, errorHandler } from './auth/middleware/errorHandeller.js'
const app = express();

app.use(express.json())
app.use('/api/v1/auth',authRouter);

app.use(notFound);
app.use(errorHandler);

export default app;