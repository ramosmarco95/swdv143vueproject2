<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'


</script>

<template>
    
    <div>
        <Header />
        <Navbar />
        <RouterView />
        <Footer />
    </div>
</template>

<style scoped>
    
</style>
