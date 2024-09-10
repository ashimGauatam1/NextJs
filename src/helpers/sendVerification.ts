import { resend } from "@/lib/resend";
import { APIResponse } from "./ApiResponse";
import VerificationEmail from "../../emails/sendVerificationCode";

interface email{
    username:string,
    email:string,
    verifycode:string
}


export async function SendVericationEmail(
    username:string,
    email:string,
    verifiycode:string):Promise<APIResponse> {
    try {
      const response = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to:email,
        subject: 'Hello world',
        react: VerificationEmail({username,otp:verifiycode}),
      });
      return { success: true, message: "verification email send successfully" };

    } catch (error) {
      console.error("Error sending verification email", error);
      return { success: false, message: "failed to send verification email" };
    }
}
    