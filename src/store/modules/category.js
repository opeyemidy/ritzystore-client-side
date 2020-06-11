import EventService from '@/services/RitzyService'

export const namespaced = true

export const state = {
  categories: [],
  category: []
}
export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
  SET_CATEGORY(state, category) {
    state.category = category
  }
}

export const actions = {
  fetchCategories({ commit }) {
    EventService.getCategories()
      .then(response => {
        commit('SET_CATEGORIES', response.data)
      })
      .catch(error => {
        console.log('there is an error getting category', error)
      })
  },
  fetchCategory({ commit }, id) {
    // const product = getters.getProductById(id)
    // if (product) {
    //   commit('SET_PRODUCT', product)
    // } else {
    EventService.getCategory(id)
      .then(response => {
        commit('SET_CATEGORY', response.data)
      })
      .catch(error => {
        console.log('error', error)
      })
    // }
  }
}
