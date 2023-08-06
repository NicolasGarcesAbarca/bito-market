import { Link } from "react-router-dom"
function NavBar() {
    return (
        <nav className="sticky top-0 left-0 z-50 h-16 w-full bg-gray-300 px-28 flex items-center justify-between shadow-lg">
            <div className="h-8 w-8 bg-slate-700">
            </div>
            <ul className='flex gap-4 text-base text-black-text'>
                <li><Link to={'/login'}>ENTRAR</Link></li>
                <li><Link to={'/register'}>REGISTRARSE</Link></li>
                <li className="text-purple-primary"><Link to={'/upload'}>SUBIR BEAT</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar
