import axios from 'axios'

console.log("axios api")

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

export const setJWT = (jwt: string | undefined) => {
  if (jwt) {
    api.interceptors.request.use(function (value) {
      value.headers.authorization = `Bearer ${jwt}`
      return value
    })
  }
}

export default api