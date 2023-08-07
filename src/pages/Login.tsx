import LoginForm from "../components/forms/LoginForm"
import { useNavigate } from "react-router-dom"
import { PiArrowFatLeftBold } from "react-icons/pi"
function LoginPage() {
    const navigate = useNavigate()
    return <main className="bg-slate-950 min-h-screen">
        <section className="flex flex-col p-8 lg:p-12">
            <div className="absolute">
                <button
                    onClick={() => navigate('/')}
                    className="bg-cyan-primary hover:bg-cyan-400 p-3 flex items-center gap-1">
                    <PiArrowFatLeftBold />
                    <p className="text-sm text-black-text">VOLVER</p>
                </button>
            </div>
            <div className="flex flex-col justify-center items-center h-screen lg:pb-20">
                <div className="w-full lg:w-1/3 flex flex-col gap-10 bg-slate-800 p-10">
                    <p className="text-center text-white text-xl"> INGRESA A BITO CON EMAIL Y PASSWORD</p>
                    <LoginForm />
                </div>
            </div>
        </section>
    </main>
}

export default LoginPage