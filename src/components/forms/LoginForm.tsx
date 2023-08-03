import { Formik, Form, FormikHelpers } from "formik";
import InputText from "./InputText";
import { validateLogin } from "../../lib/formValidation";

export interface ILoginValues {
    email: string
    password: string
}

const initValues: ILoginValues = {
    email: '',
    password: '',
}

const onSubmit = async (values: ILoginValues, actions: FormikHelpers<ILoginValues>) => {
    console.log({ values })
    actions.setSubmitting(false)
    actions.resetForm()
}

function LoginForm() {
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