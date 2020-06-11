<template>
  <b-row class="mb-3">
    <b-col cols="12">
      <b-card>
        <h5 class="custom-card-title">product details</h5>
        <hr />
        <p>
          {{ details }}
        </p>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
export default {
  props: {
    details: String
  }
}
</script>
