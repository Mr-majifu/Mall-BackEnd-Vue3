import { ref } from 'vue'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

interface ResponseData<T = any> {
  code: number
  data: T
  message: string
}

const instance = axios.create({
  baseURL: 'http://ludir.cn:8888/api/private/v1/',
  timeout: 5000,
})

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('mytoken')
    if (token) {
      config.headers.Authorization = token
    }
    if (config.method === 'post' || config.method === 'put') {
      if (!config.headers['Content-Type']) {
        config.headers['Content-Type'] = 'application/json'
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export const useAxios = () => {
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const request = async <T>(config: AxiosRequestConfig): Promise<T> => {
    isLoading.value = true
    error.value = null

    try {
      const response: AxiosResponse<ResponseData<T>> = await instance.request(config)
      return response.data.data
    } catch (err: any) {
      error.value = err.response?.data?.message || err.message
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const get = async <T>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> => {
    return request<T>({ method: 'get', url, params, ...config })
  }

  const post = async <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    return request<T>({ method: 'post', url, data, ...config })
  }

  return { isLoading, error, request, get, post }
}
