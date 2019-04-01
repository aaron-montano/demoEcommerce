// ./src/pages/Details
<template>
  <div>
    <product-details :product="product" :isAdding="true" ></product-details>
    <router-link to="../"><button class='button'>&nbsp;&nbsp;&nbsp;&nbsp;<i class='fa fa-arrow-left'></i>&nbsp;&nbsp;&nbsp;&nbsp;</button></router-link>
  </div>

</template>

<script>
  import ProductDetails from '../components/product/ProductDetails'
  export default {
    created () {
      if (!this.product.name) {
        this.$store.dispatch('productById', this.$route.params['id'])
      }
    },
    computed: {
      product () {
        return this.$store.getters.productById(this.$route.params['id'])
      }
    },
    components: {
      'product-details': ProductDetails
    }
  }
</script>