import EventService from '@/services/RitzyService'

export const namespaced = true

export const state = {
  products: [],
  product: []
}
export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  },
  SET_PRODUCT(state, product) {
    state.product = product
  }
}

export const actions = {
  fetchProducts({ commit }) {
    EventService.getProducts()
      .then(response => {
        commit('SET_PRODUCTS', response.data)
      })
      .catch(error => {
        console.log('there is an error', error)
      })
  },
  fetchProduct({ commit }, id) {
    const product = getters.getProductById(id)
    if (product) {
      commit('SET_PRODUCT', product)
    } else {
      EventService.getProduct(id)
        .then(response => {
          commit('SET_PRODUCT', response.data)
        })
        .catch(error => {
          console.log('error', error)
        })
    }
  }
}

export const getters = {
  filterProducts: state => {
    return state.products.slice(0, 4)
  },
  getProductById: state => id => {
    return state.products.find(product => product.id === id)
  }
}
