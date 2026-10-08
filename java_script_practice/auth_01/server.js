import app from "./src/app.js"
import {connectDb} from './src/auth/db/index.js';
const serverStart =async()=>{
    const PORT =8080;

    await connectDb();
    app.listen(PORT,()=>{
        console.log("Server start at ",PORT)
    })
}

serverStart();

