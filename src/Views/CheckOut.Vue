<template>
  <Navbar></Navbar>
  <body class="checkout-index-index page-layout-checkout fullwidth wide">
    <div class="page-wrapper">
      <BreadCrumbs SecondStrong="Thanh Toán"/>
      <main id="main-content" class="page-main">
        <div class="columns">
          <div class="column main">
            <div id="checkout" class="checkout-container">
              <ProgressCheckOut/>
              <div class="opc-wrapper">
                <ol class="opc" id="checkoutSteps">
                  <li>
                    <div class="checkout-step-login">
                      <div class="checkout-step-title step-title-login">
                        <box-icon type="solid" name="user"></box-icon>
                        <p>Đăng nhập</p>
                      </div>
                      <div class="login-container">
                        <div class="block block-customer-login">
                            <div class="append-from-login block-title">
                                <h3>
                                    <span>Đăng Nhập</span>
                                </h3>
                                <span>
                                    Đăng nhập để nhập nhiều ưu đãi hơn
                                </span>
                                <br>
                                <span>
                                    và nhiều tính năng đặc biệt
                                </span>
                            </div>
                            <form action="" class="fieldset" id="checkout-form-login">
                                <fieldset id="checkout-form-login-fieldset" class="fieldset">
                                    <div class="field required">
                                        <label for="checkout-login-email" class="label">
                                          <span>Email</span>
                                        </label>
                                        <div class="control _with-tooltip">
                                          <input class="input-text" type="email" name="username" id="checkout-login-email" v-model="email" required>
                                        </div>
                                    </div>
                                    <fieldset class="fieldset hidden-fields">
                                      <div class="field required">
                                        <label for="checkout-login-password" class="label">
                                          <span>Mật Khẩu</span>
                                        </label>
                                        <div class="control">
                                          <input class="input-text" type="password" name="password" id="checkout-login-password" v-model="password" required>
                                        </div>
                                      </div>
                                      <div class="actions-toolbar">
                                        <div class="primary">
                                          <button class="action login primary" type="submit">
                                            <span>Đăng Nhập</span>
                                          </button>
                                          
                                        </div>
                                      </div>
                                    </fieldset>
                                </fieldset>
                            </form>
                        </div>
                        <div class="block block-new-customer">
                          <div id="checkout-step-title">
                            <div class="block-title">
                              <h3>
                                <span>Mua hàng không cần đăng nhập</span>
                              </h3>
                              <span>
                                <span>Chào mừng! Bạn không cần tạo tài khoản</span>
                                <br>
                                <span>để đặt hàng</span>
                              </span>
                            </div>
                            <div class="or">
                              <span>
                                <span>Hoặc</span>
                              </span>
                            </div>
                            <form novalidate="novalidate">
                              <div class="actions-toolbar">
                                <div class="primary">
                                  <button type="submit" class="button action continue primary">
                                    <span>
                                      <span>Xác nhận mua hàng không đăng nhập</span>
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </form>
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
import BreadCrumbs from '../components/BreadCrumbs.vue'
import ProgressCheckOut from '../components/ProgressCheckOut.vue'
import Navbar from '@/components/Navbar.vue';
export default {
  data() {
    return {
        email : "",
        password : ""
    };
  },
  components: {
    BreadCrumbs,
    ProgressCheckOut,
    Navbar
  }
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
a:visited,
.alink:visited {
  color: #000;
  text-decoration: none;
}
.checkout-step-title {
  padding: 0 0 0 35px;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: #000;
  display: flex;
  margin: 0;
  border: none;
  position: relative;
}

.login-container {
  margin-bottom: 0;
  margin-top: 40px;
}
.login-container>.block .block-title {
    text-align: center;
    font-weight: 400;
    font-size: 15px;
    line-height: 19px;
    margin-bottom: 30px;
    border: none;
    padding: 0;
}
form {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
.login-container .fieldset:last-child {
    margin-bottom: 0;
}
.fieldset {
    border: 0;
    margin: 0 0 16px;
    padding: 0;
    letter-spacing: -.31em;
}
.login-container .fieldset>.field {
    margin-bottom: 25px;
}
.fieldset>.field, .fieldset>.fields>.field {
    margin: 0 0 16px;
}
.fieldset>* {
    letter-spacing: normal;
}
.login-container .fieldset>.field:not(.choice)>.label {
    font-weight: 400;
    font-size: 15px;
    line-height: 19px;
    color: #000;
    margin: 0 0 10px;
    padding: 0;
}
.login-container .fieldset>.field:not(.choice)>.label {
    font-weight: 400;
    font-size: 15px;
    line-height: 19px;
    color: #000;
    margin: 0 0 10px;
    padding: 0;
}
.login-container .fieldset>.field:not(.choice).required>.label:after {
    color: #e40a0a;
    font-size: 15px;
}
.fieldset>.field.required>.label:after{
    content: '*';
    color: #e74949;
    font-size: 1.5rem;
    margin: 0 0 0 4px;
}
.field .control._with-tooltip {
    position: relative;
}
.login-container .fieldset>.field:not(.choice) input.input-text {
    background: #f1f1f1;
    border: 1px solid #e4e4e4;
    height: 48px;
    border-radius: 0;
}
.login-container .fieldset>.field .control._with-tooltip input {
    margin: 0;
    width: 100%;
}
.field .control._with-tooltip input {
    margin-right: 11px;
    width: calc(100% - 40.5px);
}
.login-container .actions-toolbar .action.primary {
    display: block;
    border-radius: 0;
    background: #000;
    font-weight: 700;
    font-size: 16px;
    padding: 13px;
    line-height: 20px;
    text-align: center;
    color: #fff;
    border: 1px solid #000;
    width: 100%;
    text-transform: uppercase;
}
.login-container>.block .block-title {
    text-align: center;
    font-weight: 400;
    font-size: 15px;
    line-height: 19px;
    margin-bottom: 30px;
    border: none;
    padding: 0;
}
.login-container>.block .block-title h3 {
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    margin: 0 0 15px;
}
.login-container .or {
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    position: relative;
    overflow: hidden;
    margin: 40px 0;
}
.login-container .or span {
    display: inline-block;
    padding: 0 9px;
}
.login-container .or:after {
    margin-right: -100%;
}
.login-container .or:before {
    margin-left: -100%;
}
.login-container .or:before, .login-container .or:after {
    content: "";
    display: inline-block;
    width: 100%;
    border-top: 1px solid #d6d6d6;
    vertical-align: middle;
}
 .control input[type=text], 
 .control input[type=password]{
    background: #f1f1f1;
    background-clip: padding-box;
    border: 1px solid #e4e4e4;
    border-radius: 0;
    font-family: 'Roboto Condensed','Helvetica Neue',Helvetica,Arial,sans-serif;
    font-size: 15px;
    height: 48px;
    line-height: 1.5;
    padding: 0 15px;
    vertical-align: baseline;
    width: 100%;
    box-sizing: border-box;
}

@media (min-width: 1024px) {
  .breadcrumbs {
    margin-bottom: 40px;
  }
}
@media (min-width: 1024px) {
  .opc-progress-bar-wrapper .action.viewcart {
    position: absolute;
    left: 0;
    top: 20px;
  }
  .page-layout-checkout .breadcrumbs {
    margin-bottom: 40px;
  }
  .login-container>.block {
    padding-left: 100px;
    padding-right: 100px;
  }
}
@media (min-width: 768px) {
  .opc-progress-bar {
    width: 100%;
    max-width: 484px;
    margin: 0 auto 71px;
  }
  .page-wrapper > .breadcrumbs,
  .page-wrapper > .top-container,
  .page-wrapper > .widget {
    box-sizing: border-box;
    width: 100%;
  }
  .breadcrumbs {
    padding-top: 0;
    padding-bottom: 0;
  }
  .breadcrumbs,
  .page-header .header.panel,
  .header.content,
  .footer.content,
  .page-wrapper > .widget,
  .page-wrapper > .page-bottom,
  .block.category.event,
  .top-container,
  .page-main {
    max-width: none;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
  }
  .login-container {
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
  }
  .login-container>.block {
    padding: 30px;
    width: 50%;
  }
  .fieldset>.field {
    box-sizing: border-box;
    margin: 0 0 16px;
  }
  .fieldset>.field:before, .fieldset>.field:after {
    content: '';
    display: table;
  }
  .login-container .fieldset>.field:not(.choice)>.label {
      padding: 0;
  }
  .fieldset>.field:after {
    clear: both;
  }
  .fieldset>.field:before, .fieldset>.field:after {
    content: '';
    display: table;
  }
  .login-container .fieldset>.field:not(.choice)>.control {
    float: none;
    clear: both;
  }
  .fieldset>.field:not(.choice)>.control {
    width: 100%;
    float: left;
  }
  .login-container>.block {
    padding: 30px;
    width: 50%;
  }
  .login-container>.block~.block {
    border-left: 1px solid #cacaca;
  }
  .login-container .block:nth-child(even){
    float: right;
  }
  .login-container .block{
    width: 48%;
  }
  .login-container .or {
    display: none;
  }
  
}
@media (min-width: 1200px) {
  .breadcrumbs,
  .page-header .header.panel,
  .header.content,
  .footer.content,
  .page-wrapper > .widget,
  .page-wrapper > .page-bottom,
  .block.category.event,
  .top-container,
  .page-main {
    padding-left: 50px;
    padding-right: 50px;
  }
}
@media (max-width:767px) {
  .login-container .block-new-customer .block-title {
    display: none;
  }
}
</style>
