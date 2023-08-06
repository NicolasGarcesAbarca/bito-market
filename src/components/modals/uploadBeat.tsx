import { useContext } from "react"
import { DialogContext } from "../../context/Dialog"
import { Modal } from "flowbite-react"
import UploadBeatForm from "../forms/UploadBeatForm"

function UploadBeat() {
    const { setOpenDialog } = useContext(DialogContext)
    return <Modal.Body>
        <div className="flex justify-end">
            <button
                className="text-black-text"
                onClick={() => { setOpenDialog(false) }}
            >X</button>
        </div>
        <div className="flex flex-col h-[400px] text-black-text p-4">
            <h1 className="text-xl text-center pb-6">Selecciona la portada y mp3</h1>
            <UploadBeatForm />
        </div>
    </Modal.Body>
}

export default UploadBeat