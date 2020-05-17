import axios from 'axios'
import NProgress from 'nprogress'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

apiClient.interceptors.request.use(config => {
  NProgress.start()
  return config
})

apiClient.interceptors.response.use(response => {
  NProgress.done()
  return response
})
export default {
  getProducts() {
    return apiClient.get('http://localhost:3000/api/product/all')
  },
  getCategories() {
    return apiClient.get('http://localhost:3000/api/category/all')
  },
  getProduct(id) {
    return apiClient.get(`http://localhost:3000/api/product/find/${id}`)
  },
  getCategory(id) {
    return apiClient.get(`http://localhost:3000/api/category/find/${id}`)
  }
  // postEvent(event) {
  //   return apiClient.post('/events/', event)
  // }
}
