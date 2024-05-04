<script setup>

import { ref } from 'vue';

const email = ref('');
const password = ref('');
const rememberMe = ref(false);
const isValidEmail = ref(true);
const errors = ref({});

const validateEmail = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    errors.value.email = 'Invalid email format';
    isValidEmail.value = false;
  } else {
    errors.value.email = '';
    isValidEmail.value = true;
  }
};

const login = () => {
  validateEmail();

  // Password validation
  if (!password.value.trim()) {
    errors.value.password = 'Password is required';
  } else {
    errors.value.password = '';
  }

  // Perform other validations if needed

  if (isValidEmail.value && !errors.value.password) {
    // Perform login logic here
    alert('Login...')
    console.log('Form submitted successfully!');
    // Clear form inputs
    email.value = '';
    password.value = '';
    rememberMe.value = false;
  }
};

const cancel = () => {
  // Clear form inputs
  email.value = '';
  password.value = '';
  rememberMe.value = false;
  errors.value.email = '';
  errors.value.password = '';
};
  
</script>

<template>
  <form @submit.prevent="login" method="post" autocomplete="on">
    <div>
      <label for="email">Email:</label>
      <input id="email" type="email" class="form-control" v-model="email" @input="validateEmail">
      <div v-if="errors.email" class="error">{{ errors.email }}</div>
      <div v-if="email && !isValidEmail" class="error">Invalid email format</div>
    </div>

    <div>
      <label for="password" class="m-5">Password:</label>
      <input type="password" class="form-control" v-model="password">
      <div v-if="errors.password" class="error">{{ errors.password }}</div>
    </div>

    <div>
      <label>
        <input style="margin-right: 10px;" type="checkbox" v-model="rememberMe">Remember me
      </label>
    </div>

    <button type="submit" class="btn m-3 bg-success btn-block bold">Login</button>

    <div class="clearfix">
      <button class="resetBtn" type="reset" @click="cancel">Cancel</button>
      <span>Forgot<a style="margin-left: 5px;" href="#">password</a></span>
    </div>
  </form>
</template>



<style scoped>
    form {
    max-width: 420px;
    margin: 30px auto;
    background: #ccc;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  div {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  span {
    float: right;
    margin-top: 10px;
  }
  .resetBtn {
    background: lightcoral;
    margin-top: 10px;
  }
  .error {
  color: red;
  margin-top: 5px;
}
</style>