<template>
  <Navbar></Navbar>
  <body class="checkout-index-index page-layout-checkout fullwidth wide">
    <div class="page-wrapper">
      <BreadCrumbs />
      <main id="main-content" class="page-main">
        <div class="columns">
          <div class="column main">
            <div id="checkout" class="checkout-container">
              <ProgressCheckOut />
              <div class="opc-wrapper">
                <ol class="opc" id="checkoutSteps">
                  <li id="shipping" class="checkout-shipping-address">
                    <div class="checkout-step-login no-active">
                      <h2 class="checkout-step-title step-title-login">
                        <span>
                          <box-icon name="user"></box-icon>
                          <span>Đăng nhập</span>
                        </span>
                      </h2>
                      <div class="not-logged">
                        <span>Chưa đăng nhập</span>
                        <button>Đăng Nhập</button>
                      </div>
                    </div>
                    <div class="checkout-step-address">
                      <div class="checkout-step-title step-title-address">
                        <span>
                          <box-icon name="trip"></box-icon>
                          <span>Địa chỉ giao hàng</span>
                        </span>
                      </div>
                      <div id="checkout-step-shipping" class="step-content">
                        <div class="checkout-step-address-right">
                          <h3 class="title">
                            <span>Thêm địa chỉ giao hàng</span>
                          </h3>
                          <div class="form-shipping-address-content">
                            <div data-role="content">
                              <form
                                action=""
                                class="form form-shipping-address"
                                id="co-shipping-form"
                              >
                                <div
                                  id="shipping-new-address-form"
                                  class="fieldset address"
                                >
                                  <div class="field _required"
                                  name="shippingAddress.telephone">
                                    <label class="label">
                                      <span>Số điện thoại</span>
                                    </label>
                                    <div class="control">
                                      <input
                                        type="text"
                                        name="telephone"
                                        id="POUJMJL"
                                        class="input-text"
                                      />
                                    </div>
                                  </div>
                                  <div
                                    class="field _required"
                                    name="shippingAddress.firstname"
                                  >
                                    <label class="label">
                                      <span>Tên</span>
                                    </label>
                                    <div class="control">
                                      <input
                                        type="text"
                                        name="firstname"
                                        id="POUJMJL"
                                        class="input-text"
                                      />
                                    </div>
                                  </div>
                                  <div
                                    class="field _required"
                                    name="shippingAddress.lastname"
                                  >
                                    <label class="label">
                                      <span>Họ</span>
                                    </label>
                                    <div class="control">
                                      <input
                                        type="text"
                                        name="lastname"
                                        id="POUJMJL"
                                        class="input-text"
                                      />
                                    </div>
                                  </div>
                                  <div
                                    class="field _required"
                                    name="shippingAddress.city_id"
                                  >
                                    <label class="label">
                                      <span>Tỉnh/Thành phố</span>
                                    </label>
                                    <select v-model="menuSelected"
                                      class="select"
                                      name="city_id"
                                      id="XGUNJLX"
                                    >
                                      <option value="">Chọn thành phố</option>
                                      <option
                                        :value="userCity.Name"
                                        v-for="userCity of City"
                                        :key="userCity.Id"
                                      >
                                        {{ userCity.Name }}
                                      </option>
                                    </select>
                                  </div>
                                  <div
                                    class="field _required"
                                    name="shippingAddress.district_id"
                                  >
                                    <label class="label">
                                      <span>Quận/Huyện</span>
                                    </label>
                                    <select v-model="selecteduserCountry"
                                      class="select"
                                      name="city_id"
                                      id="XGUNJLX"
                                    >
                                      <option value="">Chọn quận/huyện</option>
                                      <option
                                      v-for="userCity of userCountries"
                                      :key="userCity.Id"
                                      :value="userCity.Name"
                                      >
                                        {{ userCity.Name }}
                                      </option>
                                    </select>
                                  </div>
                                  <div
                                    class="field _required"
                                    name="shippingAddress.ward_id"
                                  >
                                    <label class="label">
                                      <span>Phường/xã</span>
                                    </label>
                                    <select  v-model="selecteduserCity"
                                      class="select"
                                      name="city_id"
                                      id="XGUNJLX"
                                    >
                                      <option value="">Chọn phường/xã</option>
                                      <option
                                        v-for="userCityin in userCities"
                                        :key="userCityin.Id"
                                        :value="userCityin.Name"
                                      >
                                        {{ userCityin.Name }}
                                      </option>
                                    </select>
                                  </div>
                                  <fieldset class="field street admin__control-fields required">
                                    <legend class="label">
                                      <span>Địa chỉ</span>
                                    </legend>
                                    <div class="control">
                                      <input
                                        type="text"
                                        name="telephone"
                                        id="POUJMJL"
                                        class="input-text"
                                      />
                                    </div>
                                  </fieldset>
                                </div>
                              </form>
                              <form id="shipping-method-buttons-container">
                                <div class="actions-toolbar" id="shipping-method-buttons-container">
                                  <ButtonClick content-button="XÁC NHẬN GIAO ĐẾN ĐỊA CHỈ NÀY" :ClickButton="test"/>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </body>
</template>
<script>
import BreadCrumbs from "../components/BreadCrumbs.vue";
import ProgressCheckOut from "../components/ProgressCheckOut.vue";
import ButtonClick from '@/components/ButtonClick.vue';
import axios from "axios";
import Navbar from "@/components/Navbar.vue";
export default {
  async created(){
  //   var city = axios.get('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json', {transformRequest: (data, headers) => {
  //   delete headers.common['Authorization'];
  //   return data;
  //   }
  // });
  // console.log(city);
     await axios.get('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json',{
        
     }
     )
    .then(response => {
      this.City = response.data
    })
  },
  data() {
    return {
      userCountries: [],
      country: "",
      region: "",
      userCities: [],
      menuSelected: "",
      selecteduserCountry: "",
      selecteduserCity: "",
      idCity: [],
      City : [],
      
    };
  },

  methods : {
    test(){
      console.log("hihi")
    }
  },
  watch: {
    menuSelected: function () {
      this.userCountries = [];
      this.userCities = [];
      this.selecteduserCountry = "";
      this.selecteduserCity = "";
      for(const city of this.City){
          if(this.menuSelected == city.Name){
              city.Districts.forEach(city => {
                this.userCountries.push(city);
              });
          }
      }
    },
    selecteduserCountry: function() {
            this.userCities = [];
            this.selecteduserCity = "";
            for (const city of this.userCountries) {
              if(this.selecteduserCountry == city.Name){
                city.Wards.forEach(city => {
                  this.userCities.push(city)
                 });
              }
            }
      }
  },
    components: {
    BreadCrumbs,
    ProgressCheckOut,
    ButtonClick,
    Navbar
},
};
</script>
<style>
.page-wrapper {
  margin-top: 102px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.checkout-index-index .page-main {
  width: 100%;
  max-width: 1340px;
  margin-right: auto;
  margin-left: auto;
}
.columns {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}
.columns:after {
  clear: both;
  content: " ";
  display: block;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}

.columns .column.main {
  padding-bottom: 44px;
  -webkit-flex-basis: auto;
  flex-basis: auto;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  -ms-flex-order: 1;
  -webkit-order: 1;
  order: 1;
  width: 100%;
}
.checkout-container {
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  margin-bottom: 10px;
}
.checkout-container {
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  margin-bottom: 10px;
}
a:visited,
.alink:visited {
  color: #000;
  text-decoration: none;
}
.checkout-index-index .checkout-step-login.no-active {
  color: #b7b7b7;
}
.checkout-index-index .checkout-step-login {
  padding: 40px 0;
  border-top: 1px solid #d6d6d6;
}
.checkout-step-login {
  position: relative;
}
.checkout-index-index .checkout-step-login.no-active .checkout-step-title {
  padding-bottom: 8px;
  color: #b7b7b7;
}
.checkout-step-login .checkout-step-title,
.checkout-step-address .checkout-step-title {
  padding: 0 0 0 35px;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: #000;
  border: none;
  position: relative;
}
.checkout-step-login .checkout-step-title span box-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.checkout-step-login .not-logged {
  padding-left: 35px;
  margin-top: 17px;
}
.checkout-step-login .not-logged > span {
  display: none;
}
.checkout-step-login .not-logged button {
  border: 1px solid #000;
  min-width: 200px;
  border-radius: 0;
  background-color: #fff;
  display: block;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #000;
  text-transform: uppercase;
  padding: 9px;
  width: 100%;
}
.checkout-index-index .checkout-step-address {
  padding: 40px 0;
  border-top: 1px solid #d6d6d6;
}
.checkout-step-address .checkout-step-title span box-icon {
  position: absolute;
  left: 0;
  top: 0;
}
.checkout-step-address .step-content {
  padding: 0;
  margin: 40px 0 0;
}
.opc-wrapper .step-content {
  margin: 0 0 44px;
}
.checkout-step-address .step-content {
  padding: 0;
  margin: 40px 0 0;
}
.checkout-step-address .checkout-step-address-right > h3 {
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  margin: 0 0 30px;
}
.opc-wrapper .form-shipping-address-content div[data-role="content"] {
  display: block !important;
}
.opc-wrapper .form-shipping-address {
  margin-bottom: 0;
}
.opc-wrapper .form-shipping-address .fieldset > .field:not(.choice) > .label {
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  padding: 0;
  margin-bottom: 10px;
  display: block;
}
.opc-wrapper .fieldset > .field > .label {
  font-weight: 400;
}
.label {
  color: #333;
}
.opc-wrapper .form-shipping-address .fieldset > .field:not(.choice) > .label {
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  padding: 0;
  margin-bottom: 10px;
  display: block;
}
.fieldset > * {
  letter-spacing: normal;
}
.fieldset > .field.required > .label:after,
.fieldset > .fields > .field.required > .label:after,
.fieldset > .field._required > .label:after,
.fieldset > .fields > .field._required > .label:after {
  content: "*";
  color: #e74949;
  font-size: 1.5rem;
  margin: 0 0 0 4px;
}
form {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.opc-wrapper .form-shipping-address .input-text,
.opc-wrapper .form-shipping-address .select {
  background-color: #f1f1f1;
  border: 1px solid #e4e4e4;
}
.opc-wrapper .form-shipping-address .fieldset > .field {
  margin-bottom: 25px;
}
.opc-wrapper
  .form-shipping-address
  .fieldset.address
  .field[name="shippingAddress.firstname"],
.opc-wrapper
  .form-shipping-address
  .fieldset.address
  .field[name="shippingAddress.lastname"] {
  order: 1;
}
.opc-wrapper .form-shipping-address .fieldset.address > div,
.opc-wrapper .form-shipping-address .fieldset.address > .field {
  order: 10;
}
.opc-wrapper
  .form-shipping-address
  .fieldset.address
  .field[name="shippingAddress.lastname"] {
  order: 0;
}
.opc-wrapper .form-shipping-address .fieldset.address .field[name="shippingAddress.telephone"] {
    order: 2;
}
.opc-wrapper
  .form-shipping-address
  .fieldset.address
  .field[name="shippingAddress.city_id"] {
  order: 2;
}
.opc-wrapper .form-shipping-address .fieldset.address .field[name="shippingAddress.ward_id"] {
    order: 6;
}
.opc-wrapper .form-shipping-address .fieldset.address .field.street {
    order: 3;
}
.opc-wrapper .form-shipping-address .fieldset.address .field[name="shippingAddress.district_id"] {
    order: 5;
}
.opc-wrapper .form-shipping-address .fieldset>.field {
    margin-bottom: 25px;
}
.opc-wrapper .form-shipping-address .fieldset>.field {
    margin-bottom: 25px;
}
.opc-wrapper .form-shipping-address .input-text, .opc-wrapper .form-shipping-address .select {
    background-color: #f1f1f1;
    border: 1px solid #e4e4e4;
}
.opc-wrapper .form-shipping-address select {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxNiAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuOTk5OTggOUM3Ljc0OTA3IDkgNy40OTgxOSA4LjkwMzk2IDcuMzA2OSA4LjcxMjI5TDEuMjg3MiAyLjY3Nzc2QzAuOTA0MjY3IDIuMjkzODggMC45MDQyNjcgMS42NzE1IDEuMjg3MiAxLjI4Nzc5QzEuNjY5OTcgMC45MDQwNzEgMi4yOTA3MSAwLjkwNDA3MSAyLjY3MzY3IDEuMjg3NzlMNy45OTk5OCA2LjYyNzQ4TDEzLjMyNjMgMS4yODc5N0MxMy43MDkyIDAuOTA0MjU3IDE0LjMyOTkgMC45MDQyNTcgMTQuNzEyNyAxLjI4Nzk3QzE1LjA5NTggMS42NzE2OSAxNS4wOTU4IDIuMjk0MDcgMTQuNzEyNyAyLjY3Nzk0TDguNjkzMDYgOC43MTI0OEM4LjUwMTY3IDguOTA0MTggOC4yNTA3OSA5IDcuOTk5OTggOVoiIGZpbGw9ImJsYWNrIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjAuNSIvPgo8L3N2Zz4K);
    background-position: right 25px center;
    background-repeat: no-repeat;
    padding-right: 30px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
select {
    background: #f1f1f1;
    background-clip: padding-box;
    border: 1px solid #e4e4e4;
    border-radius: 0;
    font-family: 'Roboto Condensed','Helvetica Neue',Helvetica,Arial,sans-serif;
    font-size: 15px;
    height: 48px;
    line-height: 1.5;
    padding: 5.5px 12px 4px;
    vertical-align: baseline;
    width: 100%;
    box-sizing: border-box;
}
@media (min-width: 1024px) {
  .checkout-step-address .step-content {
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    display: -webkit-flex;
    display: flex;
    padding: 0 20px;
  }
  .checkout-step-address .checkout-step-address-left,
  .checkout-step-address .checkout-step-address-right {
    width: calc((100% - 200px) / 2);
    width: -moz-calc((100% - 200px)/2);
    width: -webkit-calc((100% - 200px)/2);
    width: -o-calc((100% - 200px)/2);
    padding-bottom: 30px;
    flex-grow: 1;
    -webkit-flex-grow: 1;
  }
  .opc-wrapper .checkout-step-address-right {
    margin-left: -20px;
    padding-top: 0;
  }
  .opc-wrapper .form-shipping-address-content div[data-role="content"] {
    display: block !important;
  }
  .opc-wrapper .form-shipping-address .fieldset > .field:not(.choice) > .label {
    padding: 0;
  }
  .opc-wrapper .form-shipping-address .fieldset > .field {
    margin-bottom: 25px;
  }
}
@media (min-width: 768px) {
  .checkout-index-index .checkout-step-login.no-active {
    padding-bottom: 40px;
  }
  .checkout-index-index .checkout-step-title {
    font-size: 24px;
  }
  .checkout-step-login .not-logged {
    margin-top: 0;
  }
  .checkout-step-login .not-logged > span {
    display: block;
  }
  .checkout-step-login .not-logged button {
    position: absolute;
    right: 0;
    top: 24px;
    width: auto;
  }
  .checkout-index-index .checkout-step-address {
    padding-bottom: 60px;
  }
  .opc-wrapper .checkout-step-address-right {
    flex-grow: 1;
    -webkit-flex-grow: 1;
    max-width: 1050px;
  }
  .opc-wrapper .form-shipping-address .fieldset.address {
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-flex-direction: row;
    flex-direction: row;
  }
  .fieldset > .field:not(.choice) > .label {
    padding: 0 0 5px;
    box-sizing: border-box;
    float: left;
  }
  .fieldset > .field > .label {
    margin: 0;
  }
  .fieldset > .field:not(.choice) > .control {
    width: 100%;
    float: left;
  }
  .opc-wrapper .form-shipping-address .fieldset.address > .field,
  .opc-wrapper .form-shipping-address .fieldset.address > div {
    width: calc((100% - 50px) / 2);
    width: -moz-calc((100% - 50px)/2);
    width: -o-calc((100% - 50px)/2);
    order: 10;
  }
  .opc-wrapper
    .form-shipping-address
    .fieldset.address
    .field[name="shippingAddress.firstname"],
  .opc-wrapper
    .form-shipping-address
    .fieldset.address
    .field[name="shippingAddress.lastname"] {
    order: 1;
    width: calc((100% - 150px) / 4);
    width: -moz-calc((100% - 150px)/4);
    width: -webkit-calc((100% - 150px)/4);
    width: -o-calc((100% - 150px)/4);
  }
 
  .opc-wrapper .form-shipping-address .fieldset.address .field[name="shippingAddress.telephone"] {
    order: 3;
  }
  .opc-wrapper .form-shipping-address .fieldset.address .field[name="shippingAddress.city_id"] {
    order: 2;
  }
  .opc-wrapper .form-shipping-address .fieldset.address .field[name="shippingAddress.district_id"] {
    order: 4;
  }
  .opc-wrapper .form-shipping-address .fieldset.address .field[name="shippingAddress.ward_id"] {
    order: 6;
  }
  .opc-wrapper .form-shipping-address .fieldset.address .field.street {
    order: 5;
  }
  .fieldset>.field {
    box-sizing: border-box;
    margin: 0 0 16px;
  }
  .opc-wrapper .checkout-step-address-right .actions-toolbar {
    text-align: left;
  }
  .actions-toolbar {
    text-align: center;
  }
  .opc-wrapper .checkout-step-address-right .actions-toolbar>.primary {
    width: calc((100% - 50px)/2);
    width: -moz-calc((100% - 50px)/2);
    width: -webkit-calc((100% - 50px)/2);
    width: -o-calc((100% - 50px)/2);
  }
  
}
</style>
