import { useField } from 'formik'

interface TextInputProps {
  label: string
  name: string
  type: 'text' | 'email' | 'password'
  placeholder: string
}

export default function InputText(props: TextInputProps) {
  const { label, ...rest } = props
  const [field, meta] = useField(rest)
  return (
    <div className='flex flex-col gap-1'>
      <label className="font-sans text-white font-semibold" htmlFor={props.name}>{label}</label>
      <input className='font-sans h-10 font-semibold' {...field} {...props} />
      {meta.touched && meta.error ? (
        <p className='font-sans text-xs text-red-500 font-bold'>{meta.error}</p>
      ) : null}
    </div>
  )
}
