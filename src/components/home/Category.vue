<template>
  <b-col
    lg="2"
    md="3"
    sm="3"
    class=" p-0 pl-3 d-none d-md-block category-wrapper"
  >
    <b-card-group>
      <b-card
        no-body
        style="border: none; font-size: 16px;"
        header="Categories"
        class="text-left h3"
      >
        <b-list-group class="text-left">
          <b-list-group-item
            style="border: none; font-size: 16px; padding: 0.3rem 1.25rem ;"
            v-for="item in categories"
            :key="item.id"
            :href="`/category/${item.id}`"
            class="h5"
          >
            <!-- <span><b-icon icon="alert-triangle"></b-icon></span> -->
            {{ item.name }}
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </b-card-group>
  </b-col>
</template>
<style scoped>
.category-wrapper {
  position: -webkit-sticky;
  position: sticky;
  top: 62px;
  height: 402px;
}
</style>
<script>
export default {
  props: {
    categories: Array
  },
  data() {
    return {}
  }
}
</script>
