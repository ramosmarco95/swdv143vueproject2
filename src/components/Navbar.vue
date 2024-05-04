<script setup>

</script>

<template>
    <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <RouterLink class="navbar-brand" to="/">Logo</RouterLink>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><RouterLink to="/home">Home</RouterLink></li>
        <li><RouterLink to="/products">Products</RouterLink></li>
        <li><RouterLink to="/deals">Deals</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><RouterLink to="/login"><span class="glyphicon glyphicon-user"></span> Your Account</RouterLink></li>
        <li><RouterLink to="/shop_cart"><span class="glyphicon glyphicon-shopping-cart"></span> Cart</RouterLink></li>
      </ul>
    </div>
  </div>
</nav>
</template>

<style scoped>
       /* Remove the navbar's default rounded borders and increase the bottom margin */ 
       .navbar {
      margin-bottom: 50px;
      border-radius: 0;
    }
</style>