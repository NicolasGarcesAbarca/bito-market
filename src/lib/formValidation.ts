import { ILoginValues } from "../components/forms/LoginForm"

enum ErrorMessages {
    emailRequired = 'Debes ingresar mail',
    passwordRequired = 'Debes ingresar password',
    emailInvalid= 'Email no valido',
    passwordTooShort='Password demasiado corta'
}

interface IErrors extends ILoginValues { }

export const validateLogin = (values: ILoginValues): IErrors => {
    const errors: IErrors = {} as IErrors
    if (!values.email) {
        errors.email = ErrorMessages.emailRequired
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = ErrorMessages.emailInvalid
    }
    if (!values.password) {
        errors.password = ErrorMessages.passwordRequired
    } else if (values.password.length < 6) {
        errors.password = ErrorMessages.passwordTooShort
    }
    return errors
}