<template>
  <b-row class="remove-row-margin px-3 pt-3 pb-0">
    <b-col lg="4" md="6" sm="12" class="p-0 pb-3 image-fit">
      <b-img
        thumbnail
        fluid
        :src="currentImage == '' ? product.images[0] : currentImage"
        alt="Image 1"
      ></b-img>
      <div class="custom-thumb">
        <div class="thumbholder">
          <b-row class="thumb-custom-p m-0" v-if="product.images.length > 1">
            <b-col
              v-for="(image, index) in product.images"
              :key="index"
              cols="2"
              class="p-0"
              ><img
                :src="image"
                @click="switchImage(image, index)"
                class="img-thumbnails"
                :class="{ current: index == current }"
                alt=""
            /></b-col>
          </b-row>
        </div>
      </div>
      <hr v-if="product.images.length > 1" />
      <h5 class="custom-card-title">share this product</h5>
      <div class="product-social-page">
        <a href="">
          <i class="fab fa-facebook-f" style="font-size: 1rem;"></i>
        </a>
        <a href="">
          <i class="fab fa-twitter" style="font-size: 1rem;"></i>
        </a>
      </div>
    </b-col>
    <b-col lg="8" md="6" class="p-0 pl-4">
      <h5>
        {{ product.name }}
      </h5>
      <div>
        <i class="fas fa-star" style="font-size: .8rem; color: #f6b01e;"></i
        ><i class="fas fa-star" style="font-size: .8rem; color: #f6b01e;"></i
        ><i class="fas fa-star" style="font-size: .8rem; color: #f6b01e;"></i
        ><i class="fas fa-star" style="font-size: .8rem; color: #f6b01e;"></i
        ><i class="fas fa-star" style="font-size: .8rem; color: #c7c7cd;"></i>
        <a href="" style="font-size: .95rem;">&nbsp;(183 ratings)</a>
      </div>
      <hr />
      <div>
        <h4 style="font-weight: 900">₦ {{ userPrice }}</h4>
      </div>
      <div v-if="product.size !== null">
        <hr class="mb-1" />
        <div class="d-flex align-items-center justify-content-between">
          <h5 class="custom-card-title">promotion</h5>
          <h6>Size Guide</h6>
        </div>
        <div class="shoe-size-grade">
          <label class="" v-for="(size, index) in product.size" :key="index">
            <input type="radio" name="radio" />
            <span class="checkmark">{{ size }}</span>
          </label>
          <!-- <label
                          v-for="(size, index) in product.size"
                          :key="index"
                          for=""
                          >{{ size }}</label
                        > -->
        </div>
      </div>
      <div class="mt-3">
        <b-button block variant="danger" class="py-2">
          <div style="line-height: 24px;">
            <font-awesome-layers
              full-width
              class="float-left"
              style="font-size: 1.3em;"
            >
              <font-awesome-icon icon="shopping-cart" />
            </font-awesome-layers>
            <div style="">
              ADD TO CART
            </div>
          </div>
        </b-button>
      </div>
      <hr />
      <ul class="promotion p-0">
        <li>
          <a href="#"
            >Stay Safe, Go cashless with RitzyPay. Get additional 5% off capped
            at N500 (Ritzy APP only)</a
          >
        </li>
        <li>
          <a href="#">Enjoy unlimited Free Delivery with Ritzy Prime</a>
        </li>
        <li>
          <a href="#"
            >Buy airtime and data on Ritzy One and get up to N500 cash back. Use
            code WELCOME50</a
          >
        </li>
      </ul>
    </b-col>
  </b-row>
</template>
<script>
export default {
  props: {
    product: Object
  },
  data() {
    return {
      currentImage: '',
      current: 0
    }
  },
  computed: {
    userPrice() {
      let foo = this.product.price
      foo = parseFloat(foo)
      foo = foo.toLocaleString()
      return foo
    }
  },
  methods: {
    switchImage(image, index) {
      this.current = index
      this.currentImage = image
    }
  }
}
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
