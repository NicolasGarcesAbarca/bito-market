import { useField } from 'formik'
import { useEffect, useState } from 'react'

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
            <div className='flex items-center w-1/3'>
                <label className='block w-full border border-purple-primary text-purple-primary cursor-pointer p-3'>
                    <input
                        className='hidden'
                        {...field}
                        {...props}
                        onChange={(e) => {
                            handleFileChange(e)
                        }}
                    />
                    <p className='text-sm text-center'>BUSCAR IMÁGEN</p>
                </label>
            </div>
            <div className='w-2/3 flex justify-center'>
                {url ? (
                    <img className="border object-cover w-1/3 aspect-square" src={url} alt="preview upload image" />
                ) : (
                    <div className='flex justify-center items-center bg-slate-800 w-1/3 aspect-square'>
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
