import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost',
})

//interceptor for header bearer authentication
export default api