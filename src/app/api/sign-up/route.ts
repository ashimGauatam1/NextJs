import { SendVericationEmail } from "@/helpers/sendVerification";
import { dbConnect } from "@/lib/dbConnect";
import UserModel from '@/models/User'
import bcrypt from 'bcryptjs'

export async function POST(request:Request){
    await dbConnect();  
    try {
        const {username,email,password}=await request.json()
        const CheckingEmail=await UserModel.findOne({email})
        console.log(username,email,password)
        if(CheckingEmail){
            
          return  Response.json({
                title:"error",
                message:"Email already exists"
            },{status:400}) 
        }else{
        const hashPassword=await bcrypt.hash(password,10)
        const verificationCode=Math.floor(Math.random()*999999).toString()
        const newuser=new UserModel({
            username,
            password:hashPassword,
            email,
            verifycode:verificationCode
        })
        await newuser.save()
        const sendmail=SendVericationEmail(username,email,verificationCode);
        if (sendmail) {
            console.log(sendmail)
        }else{
            console.log("error")
        }
        return Response.json({
            title:"success",
            message:"User created",
            user:newuser
        })
    }

    } catch (error) {
        
        console.log(error)
        return Response.json({
            title:"error",
            message:error
        })
    }
}