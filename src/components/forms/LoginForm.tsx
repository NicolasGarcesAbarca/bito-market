import { Formik, Form, FormikHelpers } from "formik";
import InputText from "./InputText";
import { validateLogin } from "../../lib/formValidation";
import { loginWithEmailAndPassword } from "../../firebase/login";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Spinner } from "flowbite-react";
import { useState } from "react";

export interface ILoginValues {
    email: string
    password: string
}

const initValues: ILoginValues = {
    email: '',
    password: '',
}



function LoginForm() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const onSubmit = async (values: ILoginValues, actions: FormikHelpers<ILoginValues>) => {
        try {
            setLoading(true)
            await loginWithEmailAndPassword(values)
            actions.setSubmitting(false)
            actions.resetForm()
            toast.success('Bienvenido a BITO')
            navigate('/upload')
        } catch (err) {
            toast.error('Falló el login, prueba de nuevo')
        } finally {
            setLoading(false)
        }

    }
    return <Formik
        initialValues={initValues}
        validate={validateLogin}
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
            {loading ?
                <div className="flex justify-center mt-6">
                    <Spinner size="xl" color="purple" />
                </div>
                :
                <button className='bg-purple-primary text-white mt-6 py-2' type="submit">
                    ENTRAR
                </button>
            }
        </Form>
    </Formik>
}

export default LoginForm