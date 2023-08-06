import { useContext } from "react"
import { AuthContext } from "../../context/Auth"

import { Formik, Form, FormikHelpers } from 'formik'
import InputImage from './InputImage'
import { useState } from 'react'
import InputAudio from './InputAudio'
import { uploadPackAudioImage } from '../../services/storage/upload'
import { toast } from "react-hot-toast"

interface IValues {
    imagefile: string,
    audiofile: string
}

const initValues: IValues = {
    imagefile: '',
    audiofile: '',
}

function UploadBeatForm() {
    const { user } = useContext(AuthContext)
    const [imageFile, setImageFile] = useState<File | null>(null)
    const [audioFile, setAudioFile] = useState<File | null>(null)

    const onSubmit = async (
        _values: IValues,
        actions: FormikHelpers<IValues>,
    ) => {
        if (imageFile && audioFile && user && user.email) {
            try {
                await uploadPackAudioImage({ imageFile, audioFile, email: user.email })
                toast.success('Archivos subidos correctamente')
            } catch (err) {
                toast.error('Error al subir archivos')
            }
        }
        setAudioFile(null)
        setImageFile(null)
        actions.setSubmitting(false)
        actions.resetForm()
    }

    return <Formik
        initialValues={initValues}
        onSubmit={onSubmit}>
        <Form className='flex flex-col gap-6'>
            <InputImage
                name="imagefile"
                type="file"
                accept="image/*"
                file={imageFile}
                setFile={setImageFile}
            />
            <InputAudio
                name="audiofile"
                type="file"
                accept="audio/*"
                file={audioFile}
                setFile={setAudioFile}
            />
            <button className='bg-purple-primary p-3 mt-6 text-white' type='submit'>SUBIR BEAT</button>
        </Form>
    </Formik>
}

export default UploadBeatForm