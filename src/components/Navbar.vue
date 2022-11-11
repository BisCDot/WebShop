<template>
    <div id="header">
        <div class="navbar">
            <a href="/">
                <div class="logo">
                    <img class="logo-img" src="@/assets/logo.png" alt="">
                </div>
            </a>
            <div class="search">
                <form action="/search" class="input-search" method="get">
                    <input type="text" placeholder="Tìm kiếm sản phẩm..." spellcheck="false" id="queryFind"/>
                    <span id="clearBtn"><font-awesome-icon icon="fa-solid fa-x" /></span>
                    <span class='h-line'></span>
                    <span class="bi-search">
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                    </span>
                </form>
            </div>
            <div class="my-account">
                <a href="">
                    <font-awesome-icon icon="fa-solid fa-user" />
                </a>
                <a href="">
                    <font-awesome-icon icon="fa-regular fa-heart" />
                </a>
                <div class="shop-bag" v-on:click="CartClick" >
                        <img :src="shoppingbag"/>
                       
                 </div>
                    <div  v-bind:class="[CartClass,IsActiveClass ? activeclass : '']">
                        <h2 class="cart-title">Giỏ Hàng Của Bạn</h2>
                        <div class="cart-content" v-for="(item,index) in itemCart" :key="index">
                            <div class="cart-box">
                                <img :src="url+item.image" alt="" class="cart-img">
                                <div class="detail-box">
                                    <div class="cart-product-title">{{item.productName}}</div>
                                    <div class="cart-price">{{convertMoney(item.price)}}</div>
                                    <div class="cart-size">
                                        <span>Size:<span>{{item.pickSize}}</span></span>
                                        <span>SL:<span>{{item.quantity}}</span></span> 
                                    </div>

                                    
                                </div>
                                <div class="cart-remove" @click.prevent="removeCart(item)" >
                                        <box-icon type='solid' name='trash-alt'></box-icon>
                                </div>
                            </div>
                        </div>
                        <div class="total">
                            <div class="total-title">Total</div>
                            <div class="total-price">{{convertMoney(total)}}</div>

                        </div>
                        <button class="btn-buy">Thanh Toán</button>
                        <box-icon name='x' v-on:click="closeCart" id="close-cart"></box-icon>
                    </div>
                   
            </div>
            
        </div>
        <div class="nav-bar-menu">
            <ui id="nav">
                <li><router-link  to="/">ĐỒ MỚI</router-link></li>
                <li><a href="">ĐỒ NAM</a></li>
                <li><a href="">KHUYẾN MẠI</a></li>
                <li><a href="">ĐỒ NỮ</a></li>
                <li><a href="">PHỤ KIỆN</a></li>
                <li><a href="">GIỚI THIỆU</a></li>

            </ui>
        </div>
        
    </div>
    

</template>
<script>
import shoppingbag from "@/assets/images/shopping-bag.svg";
    export default {
    props: ["itemCart", "removeCart", "updateTotal", "total", "quantity", "quantityChange"],
    methods: {
        CartClick() {
            this.IsActiveClass = !this.IsActiveClass;
        },
        closeCart() {
            this.IsActiveClass = false;
        },
        convertMoney(num) {
            return num.toLocaleString("it-IT", { style: "currency", currency: "VND" });
        },
    },
    setup() {
        return {
            shoppingbag
        };
    },
    data() {
        return {
            IsActiveClass: false,
            activeclass: "active",
            CartClass: "cart",
            url: "https://localhost:5001/"
        };
    },
    
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
}
.shop-bag{
    display: inline-block;
}

.shop-bag img{
    color: rgba(31, 29, 29, 0.582);
    width: 44px;
    margin: 0px 8px;
    height: 25px;
    cursor: pointer;
    align-items: center;
}
.fa-heart,
.fa-user{
    color: black;
    width: 44px;
    margin: 0px 8px;
    height: 25px;
}
#header{
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    background-color:white;
    display: inline-block;
    z-index: 3;
    
}
.navbar{
    display: flex;
    height: 60px;
    align-items: center;
    padding: 0px 20px 0 40px;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    
}
.navbar .logo{
    padding-left: 40px;
    
}
.navbar .logo .logo-img{
    height: 45px;
    width: 50px;
}
.search {
    display: flex;
    height: 100%;
    justify-content: flex-start;
	align-items: center;
    padding-left: 30px;
    margin-right: 190px;
}
.search .input-search{
    margin: auto;
    width: 500px;
    height: 35px;
    display: flex;
    border: 1px solid #7f7f7f;
    background-color: white;
    justify-content: space-between;
    overflow: hidden;
    border-radius: 99px;
    transition: all 0.2s ease;
    outline: 3px solid transparent;
}
.search .input-search:focus-within{
    outline: 3px solid #c8d5f3;
}
.search .input-search span {
    height: 100%;
    display: flex;
    align-items: center;
}

.search .input-search .bi-search{
    padding-right: 1rem;
    margin-left: 10px;
    cursor: pointer;
}
.search .input-search .bi-search:hover{
    color: #2d4bf0;
}
#clearBtn:hover{
    color: #2d4bf0;
}
#clearBtn{
    padding: 0 0.5rem;
    color: #1d1d1d;
    font-size: 15px;
    line-height: 2.5rem;
    cursor: pointer;
    color: rgb(0, 0, 0,0.733);
}
.search .input-search input{
    padding: 0 0.5rem 0 1rem;
    width: 100%;
	font-size: 15px;
	color: #1d1d1d;
}
.search .input-search .h-line{
    margin: auto;
    height: 50%;
    width: 1px;
    background-color: #1d1d1d;
}
.my-account{
    display: flex;
}
#header .nav-bar-menu{
    width: 100%;
    height: 42px;
    background-color: black;
}
.nav-bar-menu #nav{
    
}
#nav{
    justify-content: space-between;
    
    justify-content: space-between;
    width: 80%;  
}
#nav > li{
    display: inline-block;
}
#nav > li > a{
    color: #ffff;
    text-transform: uppercase;
    display: inline-block;
}
#nav li a {
    padding: 0px 25px;
    line-height: 37px;
    font-family: system-ui;
    font-weight: bold;
    
}

#nav li a:hover{
    border-bottom: 2px solid white;
}
.cart{
    position: fixed;
    top: 0;
    right: -100%;
    width: 360px;
    min-height: 100vh;
    padding: 20px;
    background: var(--bg-color);
    padding: 20px;
    background: -2px 0 4px hsl(0, 4%, 15%/10%);
}
.cart.active{
    right: 0;
}
.cart-title{
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 2rem;
}
.cart-box{
    display: grid;
    grid-template-columns: 32% 50% 18%;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
}
.cart-img{
    width: 100px;
    height: 100px;
    object-fit: contain;
    padding: 10px;
}
.detail-box{
    display: grid;
    row-gap: 0.5rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 1.5rem;
}
.cart-product-title{
    text-align: left;
    font-size: 1rem;
    text-transform: uppercase;
}
.cart-price{
    font-weight: 500;
    text-align: left;
}
.input-quantity{
    display: flex;
    
    
}
.input-quantity-button{
    align-items: center;
    border: 1px solid var(--text-color);
    cursor: pointer;
    width: 27px;
    height: 27px;
    font-size: 27px;
}
.cart-quantity{
    border: 1px solid var(--text-color);
    width: 30px;
    height: 27px;
    outline-color: var(--main-color);
    text-align: center;
    font-size: 1rem;

}
.cart-remove{
    font-size: 24px;
    color: var(--main-color);
    cursor: pointer;
}
.total{
    display: flex;
    justify-content: flex-end;
    margin-top: 1.5rem;
    border-top: 1px solid var(--text-color);
}
.total-title{
    font-size: 1rem;
    font-weight: 600;
}
.total-price{
    margin-left: 0.5rem;
}
.btn-buy{
    display: flex;
    margin: 1.5rem auto 0 auto;
    padding: 12px 20px;
    border: none;
    background: var(--main-color);
    color: var(--bg-color);
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
}
.btn-buy:hover{
    background: var(--text-color);

}
.quantity-cart{
    
}
.cart-size{
    display: flex;
}
.cart-size span{
    margin-left: 5px;
}
#close-cart{
    position: absolute;
    top: 1rem;
    right: 0.8rem;
    font-size: 2rem;
    color: var(--text-color);
    cursor: pointer;
}

</style>