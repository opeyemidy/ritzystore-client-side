<b-container fluid class="p-0 content-mt-sm custom-container d-md-none">
        <b-row class="m-0 pb-3">
          <b-col>
            <b-row class="pb-3">
              <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="3000"
                fade
                controls
                indicators
                background="#ababab"
                style="text-shadow: 1px 1px 2px #333; width: 100%;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
              >
                <!-- Text slides with image -->
                <b-carousel-slide>
                  <template v-slot:img>
                    <img
                      class="d-block img-fluid w-100 carousel-container-height"
                      src="https://ng.jumia.is/cms/Homepage/2020/W13/Wednesday/Slider-3.jpg"
                      alt="image slot"
                    />
                  </template>
                  ></b-carousel-slide
                >

                <!-- Slides with custom text -->
                <b-carousel-slide>
                  <template v-slot:img>
                    <img
                      class="d-block img-fluid w-100 carousel-container-height"
                      src="https://ng.jumia.is/cms/Homepage/2020/W13/upd-techweek_wof4.jpg"
                      alt="image slot"
                    />
                  </template>
                </b-carousel-slide>

                <!-- Slides with image only -->
                <b-carousel-slide>
                  <template v-slot:img>
                    <img
                      class="d-block img-fluid w-100 carousel-container-height"
                      src="https://ng.jumia.is/cms/Homepage/2020/W13/DailyEssentials.jpg"
                      alt="image slot"
                    />
                  </template>
                </b-carousel-slide>

                <!-- Slides with img slot -->
                <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                <b-carousel-slide>
                  <template v-slot:img>
                    <img
                      class="d-block img-fluid w-100 carousel-container-height"
                      src="https://ng.jumia.is/cms/8-18/stay-safe/updated/s-ss.jpg"
                      alt="image slot"
                    />
                  </template>
                </b-carousel-slide>

                <!-- Slide with blank fluid image to maintain slide aspect ratio -->
                <b-carousel-slide>
                  <template v-slot:img>
                    <img
                      class="d-block img-fluid w-100 carousel-container-height"
                      src="https://ng.jumia.is/cms/Homepage/2020/W13/Wednesday/NG_W13_S_WED_TECHWEEK_1.jpg"
                      alt="image slot"
                    />
                  </template>
                </b-carousel-slide>
              </b-carousel>
            </b-row>
            <b-row>
              <b-col cols="12" class="p-0 product-sm-px">
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
              <b-col cols="12" class="p-0 product-sm-px">
                <b-card
                  header="Flash Sales"
                  class="my-card-title flash-sales-title"
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
            <b-row class="mt-3">
              <b-col cols="12" class="p-0 product-sm-px">
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
          </b-col>
        </b-row>
      </b-container>
