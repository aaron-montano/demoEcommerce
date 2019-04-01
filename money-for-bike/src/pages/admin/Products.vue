// src/pages/Admin/Products
<template>
    <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
          <table class="table table-striped">
            <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Manufacturer</th>
              <th></th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="product in products" :key='product._id'>
              <td>{{product.name}}</td>
              <td>${{product.price}}</td>
              <td>{{product.manufacturer}}</td>
              <td><router-link :to="'/admin/edit/'+product._id"><i class='fa fa-pencil'></i></router-link></td>
              <td><a @click="deleteProduct(product._id)" ><i class='fa fa-trash'></i></a></td>
            </tr>
            </tbody>
          </table>
        </div>
</template>

<script>
  export default {
    computed: {
      products () {
        return this.$store.getters.allProducts
      }
    },
    created () {
      if (this.products.length === 0) {
        this.$store.dispatch('allProducts')
      }
    },
    methods: {
      deleteProduct (id) {
        this.$store.dispatch('removeProduct', id)
      }
    }
  }
</script>

<style>
.product {
    background: #FFF;
    padding: 15px;
    margin-bottom: 15px;
    transition: all 200ms ease-in;
  }
  
  .product:hover {
    transform: scale(1.1) translateY(-15px);
    box-shadow: 7px 9px 18px -2px rgba(61,61,61,1);
  
  }
  
  .product-link {
    display: block;
    color: #3D3D3D;
  }
  
  .product-link:hover {
    color: #3D3D3D;
    text-decoration: none;
  }
  
  .product .product__image {
    width: 100%;
  }
  
  .product__image img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  
  .product__description {
    width: 100%;
  }
  
  .product__description small {
    color: #808080;
  }
  
  .product__description h4 {
    margin: 3px 0 5px 0;
  }
  
  .product__price-cart {
    display: flex;
    margin-top: 10px;
  }
  
  .product__price-cart p {
    flex-grow: 2;
    font-size: 20px;
    font-weight: bold;
  }
  </style>