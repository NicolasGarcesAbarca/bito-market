import { Link } from "react-router-dom"
import { ImSpades, ImMenu } from "react-icons/im"
import { useContext } from "react"
import { AuthContext } from "../context/Auth"

function NavBar() {
    const { user } = useContext(AuthContext)
    return (
        <nav className="sticky top-0 left-0 z-50 h-16 w-full bg-gray-300 px-10 md:px-28 flex items-center justify-between shadow-lg">
            <div className="h-8 w-8 text-2xl text-purple-primary flex justify-center items-center">
                <ImSpades />
            </div>
            <ul className='hidden md:flex md:gap-4 text-base text-black-text'>
                <li><Link to={'/login'}>ENTRAR</Link></li>
                <li><Link to={'/register'}>REGISTRARSE</Link></li>
                {user ?
                    <li className="text-purple-primary"><Link to={'/upload'}>SUBIR BEAT</Link></li>
                    : null
                }
            </ul>
            <div className="block md:hidden text-xl">
                <button><ImMenu /></button>
            </div>

        </nav>
    )
}

export default NavBar
