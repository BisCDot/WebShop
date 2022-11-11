import { createRouter,createWebHistory } from "vue-router";
import Home from '@/Views/Home.vue';
import ProductDetail from "@/Views/ProductDetail.vue";
const routes = [
    {
        path : '/',
        name : 'Home',
        props: true,
        component: Home,
        
    },
    {
        path : '/products/:productID',
        name : 'ProductDetail',
        component : ProductDetail,
        props: true,
    }
   
]
const router = createRouter({
    history : createWebHistory(),
    routes
})
export default router