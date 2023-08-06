import api from "./api"
import { IRegisterValues } from "../components/forms/RegisterForm"
export const create = async (value: IRegisterValues) => {
    const { name, email, password } = value
    const data = await api.post('/v1', { name, email, password })
    return data
}