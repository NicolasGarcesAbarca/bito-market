import { ILoginValues } from "../components/forms/LoginForm"
import { IRegisterValues } from "../components/forms/RegisterForm"
import { IValuesUploadBeat } from "../components/forms/UploadBeatForm"

enum ErrorMessages {
  nameRequired = "Debes ingresar nombre",
  emailRequired = 'Debes ingresar mail',
  passwordRequired = 'Debes ingresar password',
  emailInvalid = 'Email no valido',
  passwordTooShort = 'Password demasiado corta',
  passwordConfirmationInvalid = 'Las password son diferentes',
  priceRequired = 'Debes ingresar precio',
  titleRequired = 'Debes ingresar título'
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
  if (!values.name) {
    errors.name = ErrorMessages.nameRequired
  }
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

export const validateUploadBeat = (values: IValuesUploadBeat): IValuesUploadBeat => {
  const errors: IValuesUploadBeat = {} as IValuesUploadBeat
  if (!values.title) {
    errors.title = ErrorMessages.titleRequired
  }

  if (!values.price) {
    errors.price = ErrorMessages.priceRequired
  } 

  return errors
}