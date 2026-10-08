import 'dotenv/config';

import app from './src/app.js'
import { connectDb } from './src/utils/db.js';
console.log("DATABASE_URL:", process.env.DATABASE_URL);
const serverStart = async ()=>{
    console.log(process.env.DATABASE_URL)
    await connectDb();
    const PORT =8080;
    app.listen(PORT,()=>{
        console.log(`Server is running on ${PORT}`);
    })
}

serverStart().catch((err)=>{
    console.error(`Error come to start of server ${err}`)
});