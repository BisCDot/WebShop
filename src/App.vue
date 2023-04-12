<template>
  <router-view  :updateCart="addToCart" :products="products" :buyProductCheckOut="buyProductCheckOut" :cart="cart" :totalPrice="totalItem" :totalQuantity="totalQuantity"  />
</template>

<script>
function findById(arr,id) {
  return arr.find((x) => x.id === id )
}
function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(Buffer.from(base64, "base64").toString("ascii").split("").map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}
// import Navbar from '@/components/Navbar.vue';
// import { notify } from "@kyvg/vue3-notification";
import { Buffer } from 'buffer';
import axios from "axios";

import router from './router';
axios.defaults.baseURL = 'https://localhost:5001/api/';
// axios.defaults.headers.common['Authorization'] = `Bearer `+localStorage.token;
export default {

  async created(){
        this.viewCart();
        let result = await axios.get("products");
        this.products = result.data;
        console.log("product",result.data)
        if(localStorage.token == null){
          this.isAuthentication = false;
        }
        if (localStorage.token) {
          const jwtPayload = parseJwt(localStorage.token);
          if (jwtPayload.exp < Date.now()/1000) {
            // token expired
            localStorage.removeItem('token')
            
            this.isAuthentication = false;    
            }
            this.isAuthentication = true;  
            
        } else {
          this.isAuthentication = false;
               
        }
        console.log(this.isAuthentication)
  },
        
  data(){
    return {
        cart : [],
        quantity: 1,
        item : [],
        products: [],
        isAuthentication : false,
    }
    
  },
  computed: {
    cartTotal : function(){
      var i;
      var total = 0;
      for (i = 0; i < this.cart.length; i++) {
        total += this.cart[i].price;
      }
      return total;
    },
    totalQuantity : function(){
        let sum = 0;
        for (let i = 0; i < this.cart.length; i++) {
          sum += this.cart[i].quantity;
          
        }
        return sum
    },
    totalItem : function(){
      let sum = 0;
      let summ = 0;
      this.cart.forEach(function(item){
        sum = item.price;
        summ += sum * parseFloat(item.quantity);
        // if (summ < 1) {
        // }
      });
      return summ;
    }
  },
  

  methods : {
    async viewCart() {
        let result = await axios.get("cart",{
          headers : {Authorization : `Bearer `+localStorage.token}
        });
        for (let index = 0; index < result.data.length; index++) {
          const element = result.data[index];
          console.log(element.cartDetails);
          this.cart = element.cartDetails
          
        }
        console.log(this.cart);
        console.log(result);
    },

    async addToCart(itemProduct){
        // let result = await axios.get("https://localhost:5001/api/carts/"+itemProduct.id);
        var itemm = findById(this.cart,itemProduct.id);
        console.log(itemm)
        if(itemm != undefined){
          itemm.qty += 1;
          this.saveCats();
        }else{
            const cartadd = {
              id : itemProduct.id,
              productName : itemProduct.productName,
              image : itemProduct.image[0].path,
              price : itemProduct.price,
              qty : 1
            }
            this.cart.push(cartadd);
            this.saveCats();
        }
    },
    removeCart : function(item){
        console.log(item);
    },
    saveCats(){
      const parsed = JSON.stringify(this.cart);
      localStorage.setItem('cart',parsed)
      this.viewCart();
    },
    updateTotal(){
        this.total = this.total + (this.item.price * this.quantity);
    },
    showLogin(){
    },
    quantityChange(e,item){
      var input = e.target;
      
      if (isNaN(input.value) || input.value <= 0) {
            input.value = 1; 
          }
          this.total = this.total + (item.price * input.value);
    },
    async buyProductCheckOut(quantity,pickSize){
          // var item = findById(this.cart,products.id)
          // if(item != undefined){
          //   if (item.pickSize != pickSize) {
          //     const cartItem = {
          //     id : products.id,
          //     productName : products.productName,
          //     image : products.image[0].path,
          //     price : products.price,
          //     qty : quantity,
          //     pickSize : pickSize,
          //   };
          //   this.cart = [...this.cart,cartItem]
          //   this.saveCats();
          //   }
          //   item.qty += 1
          //   this.saveCats();
          // }
          // else{
          //   const cartItem = {
          //     id : products.id,
          //     productName : products.productName,
          //     image : products.image[0].path,
          //     price : products.price,
          //     qty : quantity,
          //     pickSize : pickSize,
          //   };
          //   this.cart = [...this.cart,cartItem]
          //   this.saveCats();
          // }
          if (!this.isAuthentication) {
            router.push('/checkout');
          }else{
              axios.post(`cart/${quantity}/${pickSize}`,{
                
              },{
                headers :{Authorization :`Bearer `+localStorage.token }
              })
          router.push('/cart');
          }


      }
  },
  components: {
  }
}
</script>

<style>

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: 0px;
  border: 0px;
  text-decoration: none;
  list-style: none;
  font-family: 'Poppins', sans-serif;
}
:root{
  --main-color: #fd4646;
  --text-color : #171427;
  --bg-color: #fff;
}
#app {
  display: block;
  
}

</style>
