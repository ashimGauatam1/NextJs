import {z} from "zod"

export const  SignupSchema=z.object({
    username:z
    .string()
    .length(10,{message:"Username should be less than 10 character"}),
    email:z
    .string()
    .length(15,{message:"Email should be less than 15 character"}),
    password:z
    .string()
    .min(4,"password should be minimun 4 character")
    .max(15,"password should not exceed 15 character"),
    verifycode:z
    .string()
    .length(6,"enter 6 digit code ")
})