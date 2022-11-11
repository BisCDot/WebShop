<template>
  <Navbar :itemCart="cart" :removeCart="removeCart" :quantity="quantity" :total="total" :quantity-change="quantityChange"></Navbar>
  <router-view :updateCart="addToCart" :products="products" :buyProductCheckOut="buyProductCheckOut" />
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import axios from "axios";
export default {
  async created(){
        let result = await axios.get("https://localhost:5001/api/products");
        this.products = result.data;
        console.log(result.data)
    
         },
  data(){
    return {
        cart : [],
        total : 0,
        quantity: 1,
        item : [],
        products: []
    }
  },
  methods : {
    addToCart : function(itemProduct){
        if(this.quantity < 1) return;
        const item = this.cart.findIndex((x) => x.id === itemProduct.id);
        if(item !== -1){
          this.cart[item].quantity += this.quantity;
          this.total = this.total + (itemProduct.price * this.quantity);
          
        }else{
          const cartItem = {
              id : itemProduct.id,
              productName : itemProduct.productName,
              image : itemProduct.image[0].path,
              price : itemProduct.price,
              quantity : this.quantity,
            };
            this.cart.push(cartItem);
            this.total = this.total + (cartItem.price * cartItem.quantity);
        }
    },
    removeCart : function(item){
      for(let i = 0; i < this.cart.length; i++){
        if(item.id === this.cart[i].id){
            this.cart.splice(i,1)
            this.total = this.total - (item.price * item.quantity) ;
        }
      }
    },
    updateTotal(){
        this.total = this.total + (this.item.price * this.quantity);
    },
    quantityChange(e,item){
      var input = e.target;
      
      if (isNaN(input.value) || input.value <= 0) {
            input.value = 1; 
          }
          this.total = this.total + (item.price * input.value);
    },
    buyProductCheckOut(products,quantity,pickSize){
          if(quantity < 1) return;
          const item = this.cart.findIndex((x) => x.id === products.id);
          if(item !== -1){
              this.cart[item].quantity += quantity;
              this.total = this.total + (products.price * quantity);
          }else{
            const cartItem = {
              id : products.id,
              productName : products.productName,
              image : products.image[0].path,
              price : products.price,
              quantity : quantity,
              pickSize : pickSize,
            };
            this.cart = [...this.cart,cartItem]
            this.total = this.total + (cartItem.price * quantity);
          }
      }
  },
  components: {
    Navbar,
  }
}
</script>

<style>
*{
  font-family: 'Poppins', sans-serif;
}
:root{
  --main-color: #fd4646;
  --text-color : #171427;
  --bg-color: #fff;
}
#app {
  text-align: center;
  display: block;
}

</style>
