import UploadBeat from "./uploadBeat"

export type TypeModal = 'uploadBeat'

function ModalParent({ typeModal }: { typeModal: TypeModal }) {
    if (typeModal == 'uploadBeat') {
        return <UploadBeat />
    }
}

export default ModalParent