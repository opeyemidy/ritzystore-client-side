<<<<<<< HEAD
import axios from 'axios'
import NProgress from 'nprogress'
=======
import axios from 'axios';
>>>>>>> 65f1cd05c7db4cf8b60fe0bf3929b94d96e6da7b

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
<<<<<<< HEAD
    'Content-Type': 'application/json'
  },
  timeout: 10000
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
=======
    'Content-Type': 'application/json',
  },
});

export default {
  getProducts() {
    return apiClient.get('http://localhost:3000/api/product/all');
  },
  getCategories() {
    return apiClient.get('http://localhost:3000/api/category/all');
  },
  getProduct(id) {
    return apiClient.get(`http://localhost:3000/api/product/find/${id}`);
  },
  getCategory(id) {
    return apiClient.get(`http://localhost:3000/api/category/find/${id}`);
  },
  // postEvent(event) {
  //   return apiClient.post('/events/', event)
  // }
};
>>>>>>> 65f1cd05c7db4cf8b60fe0bf3929b94d96e6da7b
