<template>
  <div class="product">
    {{ testing12 }}
    <b-container
      fluid
      class="container-color px-0"
      v-for="product in product"
      :key="product.id"
    >
      <b-row class="remove-row-margin custom-row-w mx-auto">
        <b-col lg="9" md="12">
          <b-row class="mb-3">
            <b-col cols="12">
              <b-card class="remove-p-card-body mt-5">
                <!-- product overview -->
                <Overview :product="product" />
                <!-- product overview end -->
              </b-card>
            </b-col>
          </b-row>

          <!-- product details -->
          <Details :details="product.details" />
          <!-- product details end -->

          <!-- product Specification -->
          <Specification :Specification="product.Specifications" />
          <!-- product Specification end -->

          <!-- Customers feedback -->
          <Feedback />
          <!-- Customers feedback -->
        </b-col>
        <!-- realibility info -->
        <Info />
        <!-- end -->
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Overview from '@/components/product/Overview.vue';
import Details from '@/components/product/Details.vue';
import Specification from '@/components/product/Specification.vue';
import Feedback from '@/components/product/Feedback.vue';
import Info from '@/components/product/Info.vue';
import { mapState } from 'vuex';
import NProgress from 'nprogress';
import store from '@/store/';
export default {
  props: ['id'],
  beforeRouteEnter(routeTo, routeFrom, next) {
    NProgress.start();
    store.dispatch('product/fetchProduct', routeTo.params.id).then(() => {
      NProgress.done();
      next();
    });
  },
  name: 'product',
  components: {
    Overview,
    Details,
    Specification,
    Feedback,
    Info,
  },
  data() {
    return {
      ProductId: null,
    };
  },
  methods: {
    // ...mapActions('product', ['fetchProduct'])
  },
  computed: {
    ...mapState({ product: (state) => state.product.product }),
  },
  // created() {
  //   this.$store.dispatch('product/fetchProduct', this.id)
  // }
};
</script>
<style scoped>
.product {
  margin-top: 56px;
}
.image-fit img {
  width: 100%;
}
.image-fit .img-thumbnails {
  border: 2px solid #fff;
}
.image-fit .img-thumbnails:hover {
  border: 2px solid rgb(179, 176, 176);
}
.container-color {
  background-color: #f5f5f5;
}
.remove-row-margin {
  margin: 0;
}
.custom-row-w {
  max-width: 1184px;
}
.card.remove-p-card-body .card-body {
  padding: 0;
}
.shoe-size-grade label {
  min-width: 40px;

  padding: 8px;
  border-radius: 2px;
  margin: 5px;
  font-size: 0.75rem;
  font-weight: 500;
  text-align: center;
  position: relative;
  cursor: pointer;
}
/* .shoe-size-grade label:first-child {
  margin-left: 0;
} */
.promotion {
  margin: 0;
}
.promotion li {
  list-style: none;
  padding: 8px 0;
}
.promotion li a {
  font-size: 0.875rem;
}
.custom-card-title {
  font-size: 0.875rem;
  text-transform: uppercase;
  font-weight: 500;
  padding: 8 0;
}
.custom-thumb {
  position: relative;
}
.thumbholder {
  margin-top: 8px;
}
.thumb-custom-p .col-2 {
  padding: 8px !important;
  padding-left: 0 !important;
}
.product-social-page a {
  display: inline-block;
  padding: 4px;
  width: 30px;
  height: 30px;
  border: 1px solid black;
  border-radius: 50%;
  text-align: center;
}
.product-social-page a:first-child {
  margin-right: 8px;
}
.spec-list li {
  list-style: none;
}
.for-no-rating img {
  width: 100px;
}

.current {
  border: 2px solid orange !important;
}
.shoe-size-grade label input {
  opacity: 0;
  cursor: pointer;
}
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 0.9rem;
  display: flex;
  width: 100%;
  height: 100%;
  border: 1px solid #ededed;
  justify-content: center;
  align-items: center;
  padding: 6px 0;
  border-radius: 2px;
}
.shoe-size-grade label .checkmark:hover {
  /* background-color: #ccc; */
  border: 1px solid #dc3545;
}

/* When the radio button is checked, add a blue background */
.shoe-size-grade label input:checked ~ .checkmark {
  border: 1px solid #dc3545;
  background-color: #dc3545;
  /* font-weight: 900; */
  color: #fff;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  /* content: ''; */
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container-label input:checked ~ .checkmark:after {
  display: block;
}
</style>
