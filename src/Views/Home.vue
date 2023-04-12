<template>
    <Navbar></Navbar>
   <Slider></Slider>
   <ListProduct :products="products" :updateCart="updateCart"></ListProduct>
 </template>
 <script>
import ListProduct from '@/components/ListProduct.vue';
import Navbar from '@/components/Navbar.vue';
import Slider from '@/components/Slider.vue';
     export default {
        props : ['updateCart','products'],
         data(){
         return {
            
      }
     
   },
   components: {
    ListProduct,
    Slider,
    Navbar
},

    
   
}
 </script>
 <style>
 
 </style>