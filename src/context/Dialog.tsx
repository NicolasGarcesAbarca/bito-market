import { useState, createContext, ReactNode, Dispatch, SetStateAction } from "react";
import { Modal } from 'flowbite-react';
import ModalParent, { TypeModal } from "../components/modals/modalParent";

type DialogContext = {
    setOpenDialog: Dispatch<SetStateAction<boolean>>
    setTypeModal: Dispatch<SetStateAction<TypeModal>>
}

export const DialogContext = createContext<DialogContext>({} as DialogContext)

function DialogProvider({ children }: { children: ReactNode }) {
    const [openDialog, setOpenDialog] = useState(false)
    const [typeModal, setTypeModal] = useState<TypeModal>('uploadBeat')

    return <DialogContext.Provider value={{ setOpenDialog, setTypeModal }}>
        {children}
        <Modal show={openDialog}>
            <ModalParent typeModal={typeModal} />
        </Modal>
    </DialogContext.Provider>
}

export default DialogProvider