import { useContext } from "react"
import { AuthContext } from "../context/Auth"
import { DialogContext } from "../context/Dialog"

function ProfilePage() {
    const { user, userLoading } = useContext(AuthContext)
    const { setOpenDialog, setTypeModal } = useContext(DialogContext)
    setTypeModal('uploadBeat')
    if (userLoading) {
        return <div>loading</div>
    }
    const handleClick = () => () => {
        setOpenDialog(true)
    }
    return <main className="bg-slate-950 min-h-screen text-white px-32">
        <p>{user?.email}</p>
        <p>{user?.uid}</p>
        <button onClick={handleClick()} className="bg-cyan-primary text-black-text p-3">SUBIR NUEVO BEAT</button>
    </main>
}

export default ProfilePage