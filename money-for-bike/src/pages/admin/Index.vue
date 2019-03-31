<!-- ./src/pages/admin/Index.vue -->
<template>
  <div>
    <div class="admin-new">
      <div class="container">
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <h1>Whaaaat, no Admin for bike?</h1>
          <ul class="admin-menu">
            <!-- Links are to sibling routes -->
            <li><router-link to="/admin/products">View Products</router-link></li>
            <li><router-link to="/admin/new">New Product</router-link></li>
          </ul>
        </div>
        <!-- Outlet for children routes -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style>
  .admin-menu a {
    display: block;
    background: rgb(46, 139, 32);
    border: 1px solid rgb(0, 0, 0);
    color: rgb(0, 0, 0);
    padding: 10px 15px;
    font-family: 'PT Sans', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 12px;
    transform: scaleX(1);
    transition: transform 200ms ease-in;
  }
  .admin-menu a:hover {
    text-decoration: none;
    transform: scaleX(1.02);
  }
</style>