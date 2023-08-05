import { useState, createContext, ReactNode,Dispatch, SetStateAction } from "react";

type DialogContext = {
    setOpenDialog: Dispatch<SetStateAction<boolean>>
}

export const DialogContext = createContext<DialogContext>({} as DialogContext)

function DialogProvider({ children }: { children: ReactNode }) {
    const [openDialog, setOpenDialog] = useState(false)
    console.log(openDialog)
    return <DialogContext.Provider value={{ setOpenDialog }}>
        {children}
        <dialog open className="absolute top-20 right-1/2 w-20 h-20 bg-red-700">
            <p>dialog</p>
        </dialog>
    </DialogContext.Provider>
}

export default DialogProvider