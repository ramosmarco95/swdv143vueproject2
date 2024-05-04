<script setup>
import { ref, computed } from 'vue';

const cartItems = ref([
  { name: 'Item 1', price: 10 },
  { name: 'Item 2', price: 15 },
  { name: 'Item 3', price: 20 }
]);

const total = computed(() => {
  return cartItems.value.reduce((acc, item) => acc + item.price, 0);
});

const removeFromCart = (index) => {
  cartItems.value.splice(index, 1);
};
</script>

<template>
    <div class="cart">
      <h2>Shopping Cart</h2>
      <ul>
        <li v-for="(item, index) in cartItems" :key="index">
          {{ item.name }} - ${{ item.price }}
          <button @click="removeFromCart(index)">Remove</button>
        </li>
      </ul>
      <p>Total: ${{ total }}</p>
    </div>
</template>
  
 
  
<style scoped>
  .cart {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
    max-width: 400px;
    margin: 0 auto;
    margin-bottom: 20px;
    background: #ccc;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
    margin-left: 20px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
</style>