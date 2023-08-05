import { useContext } from "react"
import { AuthContext } from "../context/Auth"

function ProfilePage() {
    const {user,userLoading} = useContext(AuthContext)
    
    if(userLoading){
        return <div>loading</div>
    }
    return <main className="bg-slate-950 min-h-screen text-white px-32">
        <p>{user?.email}</p>
        <p>{user?.uid}</p>
        <button className="bg-cyan-primary text-black-text p-3">SUBIR NUEVO BEAT</button>
    </main>
}

export default ProfilePage