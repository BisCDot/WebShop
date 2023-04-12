import { createRouter,createWebHistory } from "vue-router";
import Home from '@/Views/Home.vue';
import CheckOut from '@/Views/CheckOut.vue'
import ProductDetail from "@/Views/ProductDetail.vue";
import Shipping from '@/Views/Shipping.vue'
import Cart from '@/Views/Cart.vue'
import Admin from '@/Views/Admin.vue'
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
    },
    {
        name : 'CheckOut',
        path : '/checkout',
        component : CheckOut,

    },
    {
        path : '/shipping',
        name : 'Shipping',
        component : Shipping,
        props : true,
        
    },
    {
        path : '/Cart',
        name : 'Cart',
        component : Cart,
        props : true
    },
    {
        path : '/Admin',
        name : 'Admin',
        component : Admin,
    }

   
]
const router = createRouter({
    history : createWebHistory(),
    routes
})
export default router