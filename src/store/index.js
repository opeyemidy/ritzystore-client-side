import Vue from 'vue'
import Vuex from 'vuex'
import * as product from '@/store/modules/product'
import * as category from '@/store/modules/category'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    product,
    category
  },
  state: {}
})
