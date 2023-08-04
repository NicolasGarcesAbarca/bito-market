import { ILoginValues } from "../components/forms/LoginForm"
import { IRegisterValues } from "../components/forms/RegisterForm"

enum ErrorMessages {
    emailRequired = 'Debes ingresar mail',
    passwordRequired = 'Debes ingresar password',
    emailInvalid= 'Email no valido',
    passwordTooShort='Password demasiado corta',
    passwordConfirmationInvalid='Las password son diferentes'
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

export const validateRegister = (values: IRegisterValues): IRegisterValues => {
    const errors: IRegisterValues = {} as IRegisterValues
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
    if (!values.passwordConfirmation) {
      errors.passwordConfirmation = ErrorMessages.passwordRequired
    } else if (values.password !== values.passwordConfirmation) {
      errors.passwordConfirmation = ErrorMessages.passwordConfirmationInvalid
    }
  
    return errors
  }