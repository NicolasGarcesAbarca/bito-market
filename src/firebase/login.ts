import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./init"
import { ILoginValues } from "../components/forms/LoginForm";

export async function loginWithEmailAndPassword({ email, password }: ILoginValues) {
    try{
        await signInWithEmailAndPassword(auth,email,password);
        return true
    }catch(_err){
        return false
    }
}