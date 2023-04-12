<template>
  <div id="header">
    <div class="navbar">
      <a href="/">
        <div class="logo">
          <img class="logo-img" src="@/assets/logo.png" alt="" />
        </div>
      </a>
      <div class="search">
        <form action="/search" class="input-search" method="get">
          <input
            type="search"
            placeholder="Tìm kiếm sản phẩm..."
            spellcheck="false"
            id="queryFind"
          />
          <span id="clearBtn">
            <box-icon name="x"></box-icon>
          </span>
          <span class="h-line"></span>
          <span class="bi-search">
            <box-icon name="search"></box-icon>
          </span>
        </form>
      </div>
      <div class="my-account">
        <ul class="my-account-sub">
          <li>
            <a class="my-userlogin" @click="showLogin">
              <box-icon name="user" class="fa-user"></box-icon>
            </a>
            <Transition>
              <div class="login-account" v-if="loadingLogin">
                <div class="login-details">
                  <div class="login-details__header">
                    <span class="title-username">Hi {{ nameLogin }}</span>
                    <span class="title-logout" @click="LogOut">Đăng Xuất</span>
                  </div>
                  <div class="login-details-sub CjZA9Ep">
                    <ul>
                      <li>
                        <span class="login-details-sub-account"
                          ><box-icon name="user-circle"></box-icon>Thông tin tài
                          khoản</span
                        >
                      </li>
                      <li>
                        <span class="login-details-sub-account"
                          ><box-icon name="package" color="#0c0c0c"></box-icon
                          >Lịch sử đơn hàng</span
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Transition>
          </li>
          <li>
            <a href="">
              <box-icon name="heart" class="fa-heart"></box-icon>
            </a>
          </li>
          <li>
            <div class="shop-bag" v-on:click="CartClick">
              <img :src="shoppingbag" />
            </div>
          </li>
        </ul>
        <div v-bind:class="[CartClass, IsActiveClass ? activeclass : '']">
          <h2 class="cart-title">Giỏ Hàng Của Bạn</h2>
          <div
            class="cart-content"
            v-for="(item, index) in itemCart"
            :key="index"
          >
            <div class="cart-box">
              <img :src="url + item.path" alt="" class="cart-img" />
              <div class="detail-box">
                <div class="cart-product-title">{{ item.productName }}</div>
                <div class="cart-price">{{ convertMoney(item.price) }}</div>
                <div class="cart-size">
                  <span
                    >Size:<span>{{ item.size }}</span></span
                  >
                  <span
                    >SL:<span>{{ item.quantity }}</span></span
                  >
                </div>
              </div>
              <div class="cart-remove" @click.prevent="removeCart(item.id)">
                <box-icon type="solid" name="trash-alt"></box-icon>
              </div>
            </div>
          </div>
          <div class="total" v-if="!total == 0">
            <div class="total-title">Total</div>
            <div class="total-price">{{ convertMoney(total) }}</div>
          </div>

          <span v-else>Không có sản phẩm nào</span>

          <button class="btn-buy">Thanh Toán</button>
          <box-icon name="x" v-on:click="closeCart" id="close-cart"></box-icon>
        </div>
      </div>
    </div>
    <div class="nav-bar-menu">
      <ui id="nav">
        <li>
          <router-link to="/">ĐỒ MỚI</router-link>
        </li>
        <li><a href="">ĐỒ NAM</a></li>
        <li><a href="">KHUYẾN MẠI</a></li>
        <li><a href="">ĐỒ NỮ</a></li>
        <li><a href="">PHỤ KIỆN</a></li>
        <li><a href="">GIỚI THIỆU</a></li>
      </ui>
    </div>
    <transition>
      <div class="modal-bg" v-if="show">
        <div class="tab-login">
          <Tabs>
            <Tab title="Đăng Nhập" tab-key="my-tab-1">
              <div id="modal">
                <span
                  >Đăng Nhập<a @click.prevent="closeLogin" id="close"
                    >&#215;</a
                  ></span
                >
                <form @submit.prevent="handleSubmit">
                  <input
                    v-model="email"
                    id="username"
                    name="username"
                    type="textbox"
                    placeholder="Username"
                    required
                  />
                  <input
                    v-model="password"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                  />
                  <a id="forgot-link" href="#">Quên mật khẩu?</a>
                  <button name="submit" id="submit" type="submit">
                    Đăng Nhập
                  </button>
                </form>
              </div>
            </Tab>
            <Tab title="Đăng Ký" tab-key="my-tab-2">
              <div id="modal">
                <span
                  >Đăng Ký<a @click.prevent="closeLogin" id="close"
                    >&#215;</a
                  ></span
                >
                <form>
                  <input
                    v-model="email"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                  />
                  <input
                    v-model="userName"
                    id="username"
                    name="username"
                    type="textbox"
                    placeholder="Username"
                    required
                  />
                  <input
                    v-model="password"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                  />
                  <a id="forgot-link" href="#">Quên mật khẩu?</a>
                  <button name="submit" id="submit" type="submit">
                    Đăng Ký
                  </button>
                </form>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import axios from "axios";
import Tab from "@/components/Tab.vue";
import Tabs from "@/components/Tabs.vue";
import shoppingbag from "@/assets/images/shopping-bag.svg";
export default {
  async created() {
    this.viewCart();
    if(this.loadingLogin === false){
    let responseIsAuthen = await axios
      .get("Auth/GetCurrentUser",{
        headers : {Authorization : `Bearer `+localStorage.token}
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
      this.loadingLogin = responseIsAuthen.data.isAuthentication;
      this.nameLogin = responseIsAuthen.data.userName;
    }
  },

  data() {
    return {
      IsActiveClass: false,
      show: false,
      activeclass: "active",
      CartClass: "cart",
      email: "",
      password: "",
      loadingLogin: false,
      nameLogin: "",
      url : "https://localhost:5001/",
      itemCart : []
    };
  },
  computed:{
    totalQuantity : function(){
        let sum = 0;
        for (let i = 0; i < this.itemCart.length; i++) {
          sum += this.itemCart[i].quantity;
          
        }
        return sum
    },
    total : function(){
      let sum = 0;
      let summ = 0;
      this.itemCart.forEach(function(item){
        sum = item.price;
        summ += sum * parseFloat(item.quantity);
        // if (summ < 1) {
        // }
      });
      return summ;
    },

  },
  props: [
    "updateTotal",
    "quantity",
    "quantityChange",
    "showMenu",
  ],
  emits: ["showLogin"],
  methods: {
    async viewCart() {
        let result = await axios.get("cart",{
          
          headers : {
            Authorization : `Bearer `+localStorage.token
          }
        });
        for (let index = 0; index < result.data.length; index++) {
          const element = result.data[index];
          console.log(element.cartDetails);
          this.itemCart = element.cartDetails
          
        }
        console.log(this.cart);
        console.log(result);
    },
    CartClick() {
      this.IsActiveClass = !this.IsActiveClass;
    },
    closeCart() {
      this.IsActiveClass = false;

    },
    convertMoney(num) {
      return new Intl.NumberFormat("vi-VN", {
        currency: "VND",
        style: "currency",
      }).format(num);
    },
    async handleSubmit() {
      const response = await axios
        .post("Auth", {
          Email: this.email,
          Password: this.password,
        })
        .catch();
      console.log(response);
      localStorage.setItem("token", response.data.token);
      this.$router.go();
    },
    LogOut() {
      localStorage.removeItem("token");
      this.$router.go();
    },
    showLogin() {
      this.show = true;
    },
    closeLogin() {
      this.show = false;
    },
    async removeCart(id){
        await axios.delete(`cart/${id}`,{
          headers : {Authorization :`Bearer `+localStorage.token}
        }).then(response =>{
            console.log(response);
            this.$router.go();
        }).catch(e => {
          console.log(e);
        })
    }
  },
  setup() {
    return {
      shoppingbag,
    };
  },

  components: {
    Tabs,
    Tab,
  },
};
</script>
<style>


.shop-bag {
  display: inline-block;
}

.shop-bag img {
  color: rgba(31, 29, 29, 0.582);
  width: 44px;
  margin: 0px 8px;
  height: 25px;
  cursor: pointer;
  align-items: center;
}

.fa-heart,
.fa-user {
  color: black;
  width: 44px;
  margin: 0px 8px;
  height: 25px;
}

#header {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: white;
  display: inline-block;
  z-index: 3;
  text-align: center;
}

.navbar {
  display: flex;
  height: 60px;
  align-items: center;
  padding: 0px 20px 0 40px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}

.navbar .logo {
  padding-left: 40px;
}

.navbar .logo .logo-img {
  height: 45px;
  width: 50px;
}
.my-userlogin {
  cursor: pointer;
}
.search {
  display: flex;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  padding-left: 30px;
  margin-right: 190px;
}

.search .input-search {
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

.search .input-search:focus-within {
  outline: 3px solid #c8d5f3;
}

.search .input-search span {
  height: 100%;
  display: flex;
  align-items: center;
}

.search .input-search .bi-search {
  padding-right: 1rem;
  margin-left: 10px;
  cursor: pointer;
}

.search .input-search .bi-search:hover {
  color: #2d4bf0;
}

#clearBtn:hover {
  color: #2d4bf0;
}

#clearBtn {
  padding: 0 0.5rem;
  color: #1d1d1d;
  font-size: 15px;
  line-height: 2.5rem;
  cursor: pointer;
  color: rgb(0, 0, 0, 0.733);
}

.search .input-search input {
  padding: 0 0.5rem 0 1rem;
  width: 100%;
  font-size: 15px;
  color: #1d1d1d;
}

.search .input-search .h-line {
  margin: auto;
  height: 50%;
  width: 1px;
  background-color: #1d1d1d;
}

.my-account {
  display: flex;
  position: relative;
}
.my-account-sub {
  display: flex;
}
.my-account .login-account {
  position: absolute;
}
.login-account .login-details {
  position: absolute;
  background-color: #ffffff;
  width: 200px;
}
.my-account .my-account-sub li:hover .login-details {
  display: block;
}
.login-details::before {
}

.login-details {
  display: none;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}
.login-details-sub {
  flex-direction: column;
  left: 0;
  margin-bottom: 10px;
  overflow: hidden;
  position: relative;
  right: 0;
  display: flex;
}
.login-details .login-details__header {
  background-color: #eee;
  display: flex;
  z-index: 1;
  flex-shrink: 0;
  box-sizing: border-box;
  height: 40px;
  justify-content: space-between;
  width: 100%;
}
.login-details__header .title-username {
  line-height: 40px;
  letter-spacing: 1px;
  font-weight: 900;
  color: #2d2d2d;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-right: 1em;
}
.login-details__header .title-logout {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.login-details-sub {
  background-color: #fff;
}
.login-details-sub-account {
  -webkit-mask-size: 20px 20px;
  line-height: 50px;
  cursor: pointer;
  padding-left: 10px;
}
.login-details-sub-account:hover {
  color: #2d4bf0;
}
.login-details-sub .login-details-sub-account > box-icon {
  width: 40px;
  height: 40px;
  position: absolute;
  left: 0;
  -webkit-mask-size: 20px 20px;
}

.modal-bg {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  background-color: rgba(50, 50, 50, 0.5);
}
.modal-bg form * {
  margin: 8px;
}
input#username:focus,
input#email:focus {
  outline: 0;
}

input#username,
input#email,
input#password {
  width: 240px;
  padding: 10px;
  border: none;
  border-radius: 1px;
}

.modal-bg button {
  padding: 8px 12px;
  background: #000000;
  border: none;
  color: #fff;
  border-bottom: 2px solid #5b615f;
  border-radius: 1px;
  cursor: pointer;
}
.modal-bg .button:hover {
  background: #c40532;
}
#modal {
  position: absolute;
  background-color: #f5f5f6;
  z-index: 101;
  width: 400px;
  height: 260px;
}
#modal span {
  margin-top: 1px;
  display: block;
  background: #000000;
  padding: 10px;
  color: #fff;
}
#forgot-link {
  font-size: 14px;
  line-height: 11px;
  color: #5dc3a7;
  display: block;
  margin: 0;
}
#forgot-link:hover {
  color: #23aa84;
}
#close {
  float: right;
  color: #fff;
  margin-top: -4px;
  font-family: serif;
  font-size: 20px;
}
#close:hover {
  color: rgb(240, 0, 0);
}

#header .nav-bar-menu {
  width: 100%;
  height: 42px;
  background-color: black;
}

.tab-login {
  position: absolute;
  background-color: #f5f5f6;
  top: 50%;
  left: 50%;
  z-index: 101;
  border-radius: 3px;
  width: 400px;
  height: 321px;
  margin-top: -130px;
  margin-left: -170px;
  border-bottom: 3px solid #1f2020;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
}
.nav-bar-menu #nav {
}

#nav {
  justify-content: space-between;

  justify-content: space-between;
  width: 80%;
}

#nav > li {
  display: inline-block;
}

#nav > li > a {
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

#nav li a:hover {
  border-bottom: 2px solid white;
}

.cart {
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

.cart.active {
  right: 0;
}

.cart-title {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 2rem;
}

.cart-box {
  display: grid;
  grid-template-columns: 32% 50% 18%;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}

.cart-img {
  width: 100px;
  height: 100px;
  object-fit: contain;
  padding: 10px;
}

.detail-box {
  display: grid;
  row-gap: 0.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1.5rem;
}

.cart-product-title {
  text-align: left;
  font-size: 1rem;
  text-transform: uppercase;
}

.cart-price {
  font-weight: 500;
  text-align: left;
}

.input-quantity {
  display: flex;
}

.input-quantity-button {
  align-items: center;
  border: 1px solid var(--text-color);
  cursor: pointer;
  width: 27px;
  height: 27px;
  font-size: 27px;
}

.cart-quantity {
  border: 1px solid var(--text-color);
  width: 30px;
  height: 27px;
  outline-color: var(--main-color);
  text-align: center;
  font-size: 1rem;
}

.cart-remove {
  font-size: 24px;
  color: var(--main-color);
  cursor: pointer;
}

.total {
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
  border-top: 1px solid var(--text-color);
}

.total-title {
  font-size: 1rem;
  font-weight: 600;
}

.total-price {
  margin-left: 0.5rem;
}

.btn-buy {
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

.btn-buy:hover {
  background: var(--text-color);
}

.quantity-cart {
}

.cart-size {
  display: flex;
}

.cart-size span {
  margin-left: 5px;
}

#close-cart {
  position: absolute;
  top: 1rem;
  right: 0.8rem;
  font-size: 2rem;
  color: var(--text-color);
  cursor: pointer;
}
</style>
