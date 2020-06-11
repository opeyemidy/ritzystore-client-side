<template>
  <div>
    <b-row>
      <b-col cols="12" class="py-0">
        <b-card header="Featured Products" class="my-card-title">
          <b-row>
            <b-col
              lg="3"
              md="4"
              cols="6"
              v-for="product in products"
              :key="product.name"
              class="p-0 px-3 pb-3"
            >
              <a :href="`/product/${product.id}`" class="product-link">
                <b-card>
                  <img
                    :src="product.images[0]"
                    style="width: 100%; margin-bottom: 1rem;"
                  />
                  <div class="text-left">
                    <p class="product-title">
                      {{ product.name }}
                    </p>
                    <b-card-text> ₦ {{ product.price }} </b-card-text>
                  </div>
                </b-card>
              </a>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col cols="12" class="py-0">
        <b-card header="Flash Sales" class="my-card-title flash-sales-title">
          <b-row>
            <b-col
              lg="3"
              md="4"
              cols="6"
              v-for="product in products"
              :key="product.name"
              class="p-0 px-3 pb-3"
            >
              <a :href="`/product/${product.id}`" class="product-link">
                <b-card>
                  <img
                    :src="product.images[0]"
                    style="width: 100%; margin-bottom: 1rem;"
                  />
                  <div class="text-left">
                    <p class="product-title">
                      {{ product.name }}
                    </p>
                    <b-card-text> ₦ {{ product.price }} </b-card-text>
                  </div>
                </b-card>
              </a>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col cols="12" class="py-0">
        <b-card
          header="Store Recommendation"
          class="my-card-title recommendation-sales-title"
        >
          <b-row>
            <b-col
              lg="3"
              md="4"
              cols="6"
              v-for="product in products"
              :key="product.name"
              class="p-0 px-3 pb-3"
            >
              <a :href="`/product/${product.id}`" class="product-link">
                <b-card>
                  <img
                    :src="product.images[0]"
                    style="width: 100%; margin-bottom: 1rem;"
                  />
                  <div class="text-left">
                    <p class="product-title">
                      {{ product.name }}
                    </p>
                    <b-card-text> ₦ {{ product.price }} </b-card-text>
                  </div>
                </b-card>
              </a>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  props: {
    products: Array
  }
}
</script>
<style scoped>
.my-card-title .card-header {
  text-align: left;
  font-size: 1.3rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: #14191f;
}
.my-card-title .card-body {
  padding-bottom: 0;
}
.flash-sales-title,
.recommendation-sales-title {
  border: none;
}
.flash-sales-title .card-header {
  color: #fff;
  background-color: red;
}
.recommendation-sales-title .card-header {
  color: #fff;
  background-color: rgb(50, 116, 50);
}

.product-title {
  margin-bottom: 0.3rem;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.product-link {
  text-decoration: none;
  color: rgb(31, 29, 29);
  cursor: pointer;
}
</style>
