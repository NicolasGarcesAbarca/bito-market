import { useField } from 'formik'
import { useEffect, useState } from 'react'
import { ImFilePicture } from "react-icons/im";

interface Props {
    name: string
    type: 'file'
    accept: string
    file: File | null
    setFile: (file: File | null) => void
    initialUrl?: string
}

export default function InputImage(props: Props) {
    const { setFile, file, initialUrl, ...rest } = props
    const [url, setUrl] = useState<string>(initialUrl || '')
    const [field, meta] = useField(rest)
    const { onChange } = field

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e)
        const file = e.target.files?.[0]
        if (file) {
            setFile(file)
        }
    }
    useEffect(() => {
        if (file) {
            setUrl(URL.createObjectURL(file))
        } else {
            if (initialUrl) {
                setUrl(initialUrl)
            } else {
                setUrl('')
            }
        }
    }, [file, initialUrl])
    return (
        <div className='flex w-full'>
            <div className=' w-1/3'>
                <label className='block w-full bg-slate-400 hover:bg-slate-500 cursor-pointer p-3'>
                    <input
                        className='hidden'
                        {...field}
                        {...props}
                        onChange={(e) => {
                            handleFileChange(e)
                        }}
                    />
                    <div className='text-white flex items-center justify-center gap-2'>
                        <ImFilePicture />
                        <p className='font-sans text-white font-bold text-sm text-center'>Buscar Imágen</p>
                    </div>
                </label>
            </div>
            <div className='w-2/3 flex justify-end'>
                {url ? (
                    <img className="border object-cover w-1/3 aspect-square" src={url} alt="preview upload image" />
                ) : (
                    <div className='flex justify-center items-center bg-slate-600 w-1/3 aspect-square'>
                        <p className='font-sans text-sm text-white text-center font-semibold'>No hay imagen seleccionada</p>
                    </div>
                )}
            </div>
            <div>
                {meta.touched && meta.error ? (
                    <p>{meta.error}</p>
                ) : null}
            </div>
        </div>
    )
}
