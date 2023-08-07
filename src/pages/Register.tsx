import { useNavigate } from "react-router-dom"
import RegisterForm from "../components/forms/RegisterForm"
import {PiArrowFatLeftBold} from "react-icons/pi"
function RegisterPage() {
    const navigate = useNavigate()
    return <main className="bg-slate-950 min-h-screen">
        <section className="flex flex-col p-8 lg:p-12">
            <div className="absolute">
                <button
                    onClick={() => navigate('/')}
                    className="bg-cyan-primary hover:bg-cyan-400 p-3 flex items-center gap-1">
                        <PiArrowFatLeftBold/>
                    <p className="text-sm text-black-text">VOLVER</p>
                </button>
            </div>
            <div className="flex flex-col justify-center items-center h-screen lg:pb-20">
                <div className="w-full lg:w-1/3 flex flex-col gap-10 bg-slate-800 p-10">
                    <p className="text-center text-white text-xl"> REGÍSTRATE EN BITO CON EMAIL Y PASSWORD</p>
                    <RegisterForm/>
                </div>
            </div>
        </section>
    </main>
}

export default RegisterPage