import { useField } from 'formik'

interface Props {
    name: string
    type: 'file'
    accept: string
    file: File | null
    setFile: (file: File | null) => void
}

export default function InputAudio(props: Props) {
    const { setFile, file, ...rest } = props
    const [field] = useField(rest)
    const { onChange } = field

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e)
        const file = e.target.files?.[0]
        if (file) {
            setFile(file)
        }
    }

    return (
        <div className='flex w-full'>
            <div className='flex items-center w-1/3'>
                <label className='block w-full  bg-slate-400 hover:bg-slate-500 cursor-pointer p-3'>
                    <input
                        className='hidden'
                        {...field}
                        {...props}
                        onChange={(e) => {
                            handleFileChange(e)
                        }}
                    />
                    <p className='font-sans font-bold text-sm text-center text-white'>Buscar mp3</p>
                </label>
            </div>
            <div className='w-2/3 flex items-center justify-end'>
                {file ?
                    <p className='font-sans font-semibold text-white'>{file?.name}</p>
                    : <p className='text-sm font-sans font-semibold text-white'>No hay audio seleccionado</p>}
            </div>

        </div>
    )
}
