import { useState } from "react";
import { Formik, Form, FormikHelpers } from "formik";
import InputText from "./InputText";
import { validateRegister } from "../../lib/formValidation";
import { create } from "../../services/user";
import toast from 'react-hot-toast';
import { Spinner } from "flowbite-react";
import { useNavigate } from "react-router-dom";
export interface IRegisterValues {
    name: string
    email: string
    password: string
    passwordConfirmation: string
}

const initValues: IRegisterValues = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
}



function RegisterForm() {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const onSubmit = async (values: IRegisterValues, actions: FormikHelpers<IRegisterValues>) => {
        try {
            setLoading(true)
            await create(values)
            navigate("/login")
            toast.success('Usuario Creado')
        } catch (err) {
            toast.error('Hubo un error al crear usuario')
        } finally {
            setLoading(false)
        }

        actions.setSubmitting(false)
        actions.resetForm()
    }

    return <Formik
        initialValues={initValues}
        validate={validateRegister}
        onSubmit={onSubmit}
    >
        <Form className="flex flex-col gap-3 w-full">
            <InputText
                label="Nombre"
                name="name"
                type="text"
                placeholder="kid_Yugi"
            />
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
            {loading ?
                <div className="flex justify-center mt-6">
                    <Spinner size="xl" color="purple" />
                </div>
                :
                <button className='bg-purple-primary hover:bg-purple-700 text-white mt-6 py-2' type="submit">
                    REGISTRARSE
                </button>
            }
        </Form>
    </Formik>
}

export default RegisterForm