<template>
  <div class="home">
    <div style="" class="wrapper">
      <b-container
        fluid
        class="p-0 content-mt custom-container d-none d-md-block"
      >
        <b-row class="m-0 py-3">
          <!-- category start -->
          <Category :categories="categories" />
          <!-- category ---end -->
          <b-col lg="8" sm="12" md="9">
            <!-- hero -->
            <Hero />
            <!-- hero--end -->
            <!-- Featured, flash deals and recommendations -->
            <HomeProduct :products="products" />
            <!-- product end -->
          </b-col>
          <b-col cols="2" class="p-0 pr-3 d-none d-sm-none d-lg-block">
            <Banner />
          </b-col>
        </b-row>
      </b-container>
      <!-- for small and extra small -->
    </div>
  </div>
</template>
<style scoped>
.remove-border {
  border: none;
}
</style>
<script>
// @ is an alias to /src
import Category from '@/components/home/Category.vue'
import Hero from '@/components/home/Hero.vue'
import Banner from '@/components/home/Banner.vue'
import HomeProduct from '@/components/home/HomeProduct.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',
  components: {
    Category,
    Hero,
    Banner,
    HomeProduct
  },
  data() {
    return {
      categoriesclass: '',
      contentClass: '',
      smallScreen: true
    }
  },
  computed: {
    ...mapState({ categories: state => state.category.categories }),
    products() {
      let foo = this.$store.getters['product/filterProducts']
      foo.forEach(item => {
        let moo = item.price
        moo = parseFloat(moo)
        moo = moo.toLocaleString()
        item.price = moo
      })
      return foo
    }
  },
  methods: {
    onResize() {
      if (window.innerWidth < 768) {
        this.smallScreen = true
      } else {
        this.smallScreen = false
      }
    }
  },
  created() {
    window.addEventListener('resize', this.onResize)
    this.$store.dispatch('product/fetchProducts')
    this.$store.dispatch('category/fetchCategories')
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>
<style scoped>
.wrapper {
  background-image: url('https://ng.jumia.is/cms/8-18/fashion-frenzy/BG-FF.jpg');
}

.custom-container {
  max-width: 1200px;
}
.content-mt {
  margin-top: 56px;
}
.product-sm-px {
  padding: 0 0.5rem !important;
}
.content-mt-sm {
  margin-top: 52px;
}

.md-mt-height {
  margin-top: 56px;
}
</style>
