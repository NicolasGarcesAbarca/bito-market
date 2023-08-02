function NavBar() {

    return (
        <nav className="sticky top-0 left-0 z-50 h-16 w-full bg-gray-300 px-20 flex items-center justify-between">
            <div className="h-8 w-8 bg-slate-700">
            </div>
            <ul className='flex gap-2 text-lg font-bold'>
                <li>Registrarse</li>
                <li>Login</li>
                <li>Vender Beats</li>
            </ul>
        </nav>
    )
}

export default NavBar
