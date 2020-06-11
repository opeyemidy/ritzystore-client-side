<template>
  <div class="category">
    <b-container v-for="category in category" :key="category">
      <b-row>
        <b-col cols="12">
          <h5>{{ category.name }}</h5>
        </b-col>
      </b-row>
      <hr />
      <b-row>
        <ProductCard
          v-for="product in category.Products"
          :key="product"
          :product="product"
        />
      </b-row>
    </b-container>
  </div>
</template>
<script>
import ProductCard from '@/components/category/ProductCard.vue'
import { mapState, mapActions } from 'vuex'
export default {
  props: ['id'],
  name: 'product',
  components: {
    ProductCard
  },
  data() {
    return {
      ProductId: null
    }
  },
  methods: {
    ...mapActions('category', ['fetchCateory'])
  },
  computed: {
    ...mapState({ category: state => state.category.category })
  },
  created() {
    this.$store.dispatch('category/fetchCategory', this.id)
  }
}
</script>
<style scoped>
.category {
  margin-top: 56px;
}
</style>
