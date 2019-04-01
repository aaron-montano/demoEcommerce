<!-- ./src/pages/Home.vue -->

<template>
  <div>
    <div class="title">
      <h1>Whaaaat, no <i class="fa fa-money"></i> for <i class="fa fa-bicycle"></i> ?</h1>
    </div>
    <product-list></product-list>
  </div>
</template>

<script>
  import ProductList from '../components/product/ProductList.vue'
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      'product-list': ProductList
    }
  }
</script>
