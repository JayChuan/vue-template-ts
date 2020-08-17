import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

// interface Config {
//   params?: object,
//   needLoading?: boolean,
//   opacity?: boolean,
//   delay?: number
// }

const { CancelToken } = axios // 
const BASE_URL = process.env.VUE_APP_API_URL // request base url

const apiQueue: Array<string> = [] // save request api
const apiFlag: string = '' // send request url and method

const service = axios.create({
  timeout: 10000, // request timeout
  baseURL: BASE_URL,
  withCredentials: true
})
// request interceptor
service.interceptors.request.use((config: AxiosRequestConfig) => {
  return config
}, (error) => {
  return Promise.reject(error)
})
// request response
service.interceptors.response.use((response: AxiosResponse) => {
  return response
}, (error) => {
  return Promise.reject(error)
})

export default service