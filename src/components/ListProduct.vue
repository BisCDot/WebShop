<template>
   
        <section class="shop" >
        <h2 class="section-title">Danh Sách Sản Phẩm</h2>
        <div class="shop-content">
            <div class="product-box" v-for="(product,index) in products" v-bind:key="index" >
                <img :src="url+product.image[0].path" alt="" class="product-img" @click="details(product.id)">
                <h2 class="product-title" @click="details(product.id)">{{product.productName}} </h2>
                <span class="price">{{convertMoney(product.price)}}</span>
                <div class="box-icon-shoping" @click.prevent="updateCart(product)">
                    <box-icon name='shopping-bag' animation='tada' color='#ffffff' ></box-icon>
                </div>
            </div>
        </div>
        </section>
   

</template>
<script>
    export default {
        props :['products','updateCart'],
        data(){
            return{    
                url : "https://localhost:5001/"
            }
        },
        methods: {
            convertMoney(num){
                return num.toLocaleString('it-IT', { style: 'currency', currency: 'vnd' });
            },
            details(title){
                this.$router.push('/products/' + title)
            }
        }
    }
</script>
<style>
section{
    
}

.section-title{
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
}
.shop{
    margin-top: 2rem;
    margin-bottom: 2rem;
}
.shop-content{
    width: 1400px;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(auto,330px));
    gap: 1.5rem;
}

.product-box{
    position: relative;
    
}
.product-box:hover{
    padding: 10px;
    border: 1px solid var(--text-color);
    transition: 0.4s;
    border-radius: 10px;
}
.product-img{
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    height: 216px;
    margin-bottom: 0.5rem;
    border-radius: 10px;
    
}
.price{
    font-weight: 500;
}
.box-icon-shoping{
    position: absolute;
    font-size: 1.8rem;
    cursor: pointer;
    bottom: 0;
    right: 0;
    background: var(--text-color);
    padding: 5px;
    border-radius: 10px;
}
.box-icon-shoping:hover{
    background: hsl(249, 32%, 17%);
}
.product-title{
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
}

</style>
