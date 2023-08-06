import { useContext } from "react"
import { AuthContext } from "../../context/Auth"

import { Formik, Form, FormikHelpers } from 'formik'
import InputImage from './InputImage'
import { useState } from 'react'
import InputAudio from './InputAudio'
import { uploadPackAudioImage } from '../../services/storage/upload'
import { toast } from "react-hot-toast"
import InputText from "./InputText"
import { createBeat } from "../../services/beat"
import { validateUploadBeat } from "../../lib/formValidation"

export interface IValuesUploadBeat {
    imagefile: string
    audiofile: string
    title: string
    price: string
}

const initValues: IValuesUploadBeat = {
    imagefile: '',
    audiofile: '',
    title: '',
    price: ''
}

function UploadBeatForm() {
    const { user } = useContext(AuthContext)
    const [imageFile, setImageFile] = useState<File | null>(null)
    const [audioFile, setAudioFile] = useState<File | null>(null)

    const onSubmit = async (
        values: IValuesUploadBeat,
        actions: FormikHelpers<IValuesUploadBeat>,
    ) => {
        if (imageFile && audioFile && user && user.email) {
            try {
                
                const {imageURL,audioURL} =await uploadPackAudioImage({ imageFile, audioFile, email: user.email })
                await createBeat({
                    title:values.title,
                    price:values.price,
                    imageURL,
                    audioURL,
                    uid:user.uid
                })
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
        validate={validateUploadBeat}
        onSubmit={onSubmit}>
        <Form className='flex flex-col gap-6'>
            <InputText 
                label="Título"
                name="title"
                type="text"
                placeholder="bass drop x"
            />
            <InputText 
                label="Precio de venta"
                name="price"
                type="text"
                placeholder="29900"
            />
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