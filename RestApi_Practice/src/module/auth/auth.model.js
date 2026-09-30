import { required, string } from "joi";
import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        minlength:2,
        maxlength:50,
        required:[true,"Name is requ"],
    },
    email:{
        type:String,
        trim:true,
        required:[true,"email req"],
        unique:true,
        lowercase:true,
    },
    password:{
        type:true,
        required:[true,"Password is req"],
        minlength:8,
        select:false
    },
    role:{
        type:String,
        required:[true,"Password is req"],
        enum:['cus',`sel`,`admin`],
        default:`cus`,
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    verificationToken:{type:String,select:false},
    refreshToken:{type:String,select:false},
    resetPasswordtoken:{type:String,select:false},
    resetPasswordExpire:{type:Date,select :false}


},{timestamps:true},

);
export default mongoose.model(`User`,userSchema);