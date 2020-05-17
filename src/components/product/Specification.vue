<template>
  <b-row class="mb-3">
    <b-col cols="12" v-if="Specification.length !== 0">
      <b-card>
        <h5 class="custom-card-title">Specification</h5>
        <hr />
        <b-row>
          <b-col
            v-for="item in Specification"
            :key="item.heading"
            lg="6"
            md="6"
            sm="12"
            class="mb-3"
          >
            <b-card style="height: 100%">
              <template v-slot:header>
                <h5 class="mb-0 custom-card-title">
                  {{ item.heading }}
                </h5>
              </template>
              <b-card-text>
                <ul
                  v-for="(list, index) in item.list"
                  :key="index"
                  class="m-0 spec-list px-0"
                >
                  <li>{{ list }}</li>
                </ul>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
export default {
  props: {
    Specification: Array
  }
}
</script>
<style scoped>
.custom-card-title {
  font-size: 0.875rem;
  text-transform: uppercase;
  font-weight: 500;
  padding: 8 0;
}
.spec-list li {
  list-style: none;
}
</style>
