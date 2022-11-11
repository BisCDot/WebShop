<template>
   <Slider></Slider>
   <ListProduct :products="products" :updateCart="updateCart"></ListProduct>
 </template>
 <script>
import ListProduct from '@/components/ListProduct.vue';
import Slider from '@/components/Slider.vue';
     export default {
        props : ['updateCart','products'],
         data(){
         return {
            
     }
   },
   components: {
    ListProduct,
    Slider
    },
    
   
}
 </script>
 <style>
 
 </style>