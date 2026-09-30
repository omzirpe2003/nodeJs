

import mongoose from 'mongoose';

const connectDb=async()=>{
    const conn =await mongoose.connect(process.env.URL);
}

export default connectDb;