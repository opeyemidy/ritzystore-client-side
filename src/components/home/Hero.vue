<template>
  <b-row class="px-3 pb-3">
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
      </b-carousel-slide>

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
</template>
<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    }
  }
}
</script>
<style scoped>
.carousel-container-height {
  min-height: 347px;
}
.carousel-img-height {
  height: 100%;
}
</style>
