import { Formik, Form, FormikHelpers } from "formik";
import InputText from "./InputText";
import { validateRegister } from "../../lib/formValidation";
import { create } from "../../services/user";
import toast from 'react-hot-toast';
export interface IRegisterValues {
    email: string
    password: string
    passwordConfirmation: string
}

const initValues: IRegisterValues = {
    email: '',
    password: '',
    passwordConfirmation: '',
}

const onSubmit = async (values: IRegisterValues, actions: FormikHelpers<IRegisterValues>) => {
    try{
        await create(values)
        toast.success('Usuario Creado')
    }catch(err){
        toast.error('Hubo un error al crear usuario')
    }
    
    actions.setSubmitting(false)
    actions.resetForm()
}

function RegisterForm() {
    return <Formik
        initialValues={initValues}
        validate={validateRegister}
        onSubmit={onSubmit}
    >
        <Form className="flex flex-col gap-6 w-full">
            <InputText
                label="Email"
                name="email"
                type="email"
                placeholder="matiasMTI@beat.com"
            />
            <InputText
                label="Password"
                name="password"
                type="password"
                placeholder=""
            />
            <InputText
                label="Confirme password"
                name="passwordConfirmation"
                type="password"
                placeholder=""
            />
            <button className='bg-purple-primary text-white mt-6 py-2' type="submit">
                REGISTRARSE
            </button>
        </Form>
    </Formik>
}

export default RegisterForm