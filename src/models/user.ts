import mongoose, { mongo, Mongoose, Schema } from "mongoose";

export interface User extends Document{
    username:string,
    email:string,
    password:string,
    verifycode:string,
    isverified:boolean
}

const UserSchema=new Schema({
    username:{
        type:String,
        required:[true,"username is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"email should be unique"]
    },
    password:{
        type:String,
        requird:[true,"password is required"]
    },
    verifiycode:{
        type:String,
    },
    isverified:{
        type:Boolean,
        default:false
    },
    Date:{
        type:Date,
        default:Date.now()
    }
})

const UserModel=(mongoose.models.User as mongoose.Model<User>) ||(mongoose.model<User>("User",UserSchema))

export default UserModel