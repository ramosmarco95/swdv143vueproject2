import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    { path: "/", component: () => import('../pages/Landing.vue') },
    { path: "/home", component: () => import('../pages/Home.vue') },
    { path: "/products", component: () => import('../pages/Products.vue') },
    { path: "/deals", component: () => import('../pages/Deals.vue') },
    { path: "/contact", component: () => import('../pages/Contact.vue') },

    
    { path: "/login", component: () => import('../components/LoginForm.vue') },
    { path: "/contact_form", component: () => import('../components/ContactForm.vue') },
    { path: "/shop_cart", component: () => import('../components/ShopCart.vue') },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
}); 

export default router;