import app from './src/app.js';
import connectDb from './src/common/config/db.js'

const port =process.env.SERVER_PORT || 5000;

const start= async () => {
    //connect DB
    connectDb();

    //server listen
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    });
}

start().catch((error)=>{
    console.error(`Error come in Server starting ${error}`);
    process.exit;
});
