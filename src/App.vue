<template>
  <div id="app">
    <Preloader />
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer.vue'
import Preloader from '@/components/Preloader.vue'
export default {
  data() {
    return {
      categories: []
    }
  },
  components: {
    Navbar,
    Footer,
    Preloader
  }
}
</script>
<style></style>
