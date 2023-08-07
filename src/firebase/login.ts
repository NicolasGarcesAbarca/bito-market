import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./init"
import { ILoginValues } from "../components/forms/LoginForm";

export async function loginWithEmailAndPassword({ email, password }: ILoginValues) {
    try{
        await signInWithEmailAndPassword(auth,email,password);
        return
    }catch(_err){
        throw new Error("Error en el login")
    }
}