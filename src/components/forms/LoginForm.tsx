import { Formik, Form, FormikHelpers } from "formik";
import InputText from "./InputText";
import { validateLogin } from "../../lib/formValidation";
import { loginWithEmailAndPassword } from "../../firebase/login";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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
    
    const onSubmit = async (values: ILoginValues, actions: FormikHelpers<ILoginValues>) => {
        const loginOk = await loginWithEmailAndPassword(values)
        if (loginOk) {
            actions.setSubmitting(false)
            actions.resetForm()
            toast.success('Entrando en BITO')
            navigate('/profile')
        } else {
            toast.error('Falló el login, prueba de nuevo')
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
            <button className='bg-purple-primary text-white mt-6 py-2' type="submit">
                ENTRAR
            </button>
        </Form>
    </Formik>
}

export default LoginForm