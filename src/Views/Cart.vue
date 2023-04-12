<template>
  <Navbar ></Navbar>
  <body id="html-body" class="checkout-cart-index page-layout-2columns-right fullwidth wide" aria-busy="false">
    <div class="page-wrapper">
    <BreadCrumbs SecondStrong="Giỏ hàng"></BreadCrumbs>
    <main id="maincontent" class="page-main">
      <div class="page-title-wrapper">
        <h1 class="page-title">
          <box-icon name="cart"></box-icon>
          <span class="base"> Giỏ hàng </span>
        </h1>
      </div>
      <div class="columns" >
        <div class="column main">
          <div class="cart-container">
            <form action="" method="post" class="form form-cart">
              <div class="cart-checkout table-wrapper" >
                <div class="cart-count">Sản Phẩm</div>
                <table v-for="item in cart" :key="item.id"
                  id="shopping-cart-table"
                  class="cart-checkout items data table"
                >
                  <tbody class="cart-checkout item">
                    <tr class="item-info">
                      <td class="item">
                        <div class="cart-item">
                          <a href="" class="product-item-photo">
                            <span
                              class="product-image-container product-image-container-37963"
                            >
                              <span class="product-image-wrapper">
                                <img
                                  class="product-image-photo"
                                  :src="url+item.path"
                                />
                              </span>
                            </span>
                          </a>
                          <div class="product-item-details">
                              <strong class="product-item-name">
                                <a href=""
                                  >{{item.productName}}</a
                                >
                                </strong>
                                <div class="item-options">
                                  <dl class="item-option">
                                    <dt>Màu</dt>
                                    <dd>BLACK BEAUTY</dd>
                                  </dl>
                                  <dl class="item-option">
                                    <dt>SIZE</dt>
                                    <dd>{{ item.size }}</dd>
                                  </dl>
                                </div>
                                <div class="field-qty">
                                    <QuantityInput @addQuantity="()=>{item.quantity += 1}" @removeQuantity="() => item.quantity -= 1" :quantity="item.quantity" ></QuantityInput>
                                </div>
                                <div class="cart-price">
                                  <div class="price">
                                    <span class="cart-price">
                                      <span class="price">
                                        {{formatPrice(item.price)}}
                                      </span>
                                    </span>
                                  </div>
                                </div>
                                <div class="cart-actions">
                                  
                                </div>
                            </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="cart-checkout main actions">
                  <button type="submit" class="action update">
                    <span>Cập nhật giỏ hàng</span>
                  </button>
              </div>
            </form>
          </div>
        </div>
        <div class="sidebar sidebar-main">
          <div class="cart-summary">
            <strong class="summary title">Tạm Tính</strong>
            <div id="cart-totals" class="cart-totals">
              <div class="table-wrapper">
                <table class="data table totals">
                  <tbody>
                    <tr class="totals sub qty">
                      <th class="mark">
                        <span>Số lượng</span>
                      </th>
                      <td class="amount">
                        <span>{{totalQuantity }}</span>
                      </td>
                    </tr>
                    <tr class="totals sub">
                      <th class="mark" scope="row">
                          Tạm Tính
                      </th>
                      <td class="amount">
                            <span class="price">
                              {{formatPrice(totalPrice)}}
                            </span>
                          </td>
                    </tr>
                    <tr class="totals shipping excl">
                      <th class="mark" scope="row">
                        <span class="label">Phí Vận Chuyển</span>
                      </th>
                      <td class="amount">
                        <span class="price">0 ₫</span>
                      </td>
                    </tr>
                    <tr class="grand totals">
                      <th class="mark">
                        <strong>Tổng số</strong>
                      </th>
                      <td class="amount">
                        <strong>
                          <span class="price">
                            {{formatPrice(totalPrice)}}
                          </span>
                        </strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="button-checkout-cart">
                <ButtonClick :contentButton="(contentButton + formatPrice(totalPrice))"></ButtonClick>
              </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</body>

</template>
<script>
import Navbar from '@/components/Navbar.vue'
import BreadCrumbs from "@/components/BreadCrumbs.vue";
import ButtonClick from "@/components/ButtonClick.vue";
import QuantityInput from "@/components/QuantityInput.vue";
export default {
  props : ["cart","totalPrice","totalQuantity"],
  data(){
    return {
      url : "https://localhost:5001/",
      contentButton : "Thanh Toán ",
      Totals: 19000000,
    }
  },
  methods: {
    formatPrice(value) {
     return  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
    }
  },
  components: {
    BreadCrumbs,
    QuantityInput,
    ButtonClick,
    Navbar
},
};
</script>
<style>
.page-main {
    -webkit-flex-grow: 1;
    flex-grow: 1;
}
.checkout-cart-index .columns .column.main {
    padding-bottom: 0;
}

.page-wrapper {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 100vh;
}
.page-title-wrapper {
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: flex-start;
  align-items: flex-start;
}
.page-title-wrapper .page-title {
  margin: 0 0 30px;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
}
.table-wrapper {
  margin-bottom: 22px;
}
.cart-checkout.table-wrapper .cart-item {
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    position: relative;
    width: 100%;
}
.cart-checkout.table-wrapper .items thead + .item {
  border: none;
}
.cart-checkout.table-wrapper .items > .item {
  border-bottom: 1px solid #000;
  position: relative;
}
.cart-checkout.table-wrapper .items thead + .item {
  border-top: 1px solid #000;
}
.cart-checkout.table-wrapper .items > .item {
  border: none;
}
.cart-checkout.table-wrapper tbody tr td {
  padding: 15px 0;
}
table > tbody > tr > td {
  padding: 8px 11px;
}
table > tbody > tr > th,
table > tfoot > tr > th,
table > tbody > tr > td,
table > tfoot > tr > td {
  vertical-align: top;
}
.cart-checkout.table-wrapper .cart-item .product-item-photo {
  display: block;
  width: 90px;
  min-width: 90px;
  margin: 0;
  padding: 0;
  position: static;
}
.cart-checkout.table-wrapper .product-item-photo {
  display: block;
  left: 0;
  max-width: 60px;
  padding: 0;
  position: absolute;
  top: 15px;
  width: 100%;
}
.cart-checkout.table-wrapper .product-image-wrapper {
  height: auto;
  padding: 0 !important;
}
.product-image-wrapper {
  display: block;
  height: 0;
  overflow: hidden;
  position: relative;
  z-index: 1;
}
.cart-checkout.table-wrapper .product-image-wrapper .product-image-photo {
  position: static;
}
.product-image-photo {
  bottom: 0;
  display: block;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  width: auto;
}
.product-image-container {
  display: inline-block;
  max-width: 100%;
}
.product-image-wrapper > img {
  max-width: 100%;
  height: auto;
  border: 0;
}
.product-image-container-37963 {
  width: 110px;
}
.cart-checkout.table-wrapper .cart-item .product-item-details {
  padding: 10px 0 0 15px;
  flex-grow: 1;
  -webkit-flex-grow: 1;
}
.cart-checkout.table-wrapper .cart-item .product-item-name {
    font-weight: 600;
    font-size: 15px;
    margin: 0 30px 10px 0;
    display: block;
    text-transform: uppercase;
}
.cart-checkout.table-wrapper .product-item-name {
    display: inline-block;
    font-weight: 400;
    margin-top: -6px;
}
.product-item-name>a:visited, .product.name a>a:visited {
    color: #000;
    text-decoration: underline;
}
.product-item-name {
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    -webkit-hyphens: auto;
    display: block;
    hyphens: auto;
    margin: 5.5px 0;
    word-wrap: break-word;
}
.product-item-name, .product.name a {
    font-weight: 900;
}
b, strong {
    font-weight: 800;
}
b, strong {
    font-weight: 700;
}
.cart-checkout.table-wrapper .cart-item .item-options .item-option {
  margin: 0 16px 0 0;
}
.cart-checkout.table-wrapper .cart-item .item-options {
  font-weight: 500;
  font-size: 15px;
  line-height: 17px;
  color: #6f6f6f;
  margin: 0 0 10px;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: flex-start;
  align-items: flex-start;
}
.cart-checkout.table-wrapper .item-options {
  font-size: 13px;
  margin-bottom: 11px;
}
.cart-checkout.table-wrapper .cart-item .item-options dt,
 .cart-checkout.table-wrapper .cart-item .item-options dd {
    display: inline-block;
    margin: 0;
    padding: 0;
    float: none;
    font-weight: 600;
    text-transform: none;
}
.cart-checkout.table-wrapper .cart-item .item-options dt:after {
    content: ":";
}
.cart-checkout.table-wrapper .item-options dt {
    clear: left;
    float: left;
    margin: 0 11px 5.5px 0;
}
.cart-checkout.table-wrapper .field-qty{
    width: 100px;
    margin-bottom: 15px;
}
.cart-checkout.table-wrapper .cart-item .cart-price {
    margin-bottom: 15px;
}
.cart-checkout.table-wrapper .cart-item .cart-price>.price {
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
}
.cart-checkout.table-wrapper .cart-item .cart-price .price {
    font-weight: 700;
    font-size: 16px;
    line-height: 17px;
    display: block;
    color: black;
}
.cart-checkout.table-wrapper .cart-item .cart-price>.price {
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
}
.form.form-cart .cart-checkout.actions {
    padding: 0;
}
.cart-container .form-cart .actions{
  text-align: right;
}
.form.form-cart .cart-checkout.actions .action.update {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #000;
    text-transform: uppercase;
    border: 1px solid #000;
    height: 48px;
    min-width: 310px;
    border-radius: 0;
    padding: 8px;
}
button{
    background-image: none;
    background: #fff;
    border: 2px solid #000;
    color: #000;
    cursor: pointer;
    display: inline-block;
    font-family: 'Roboto Condensed','Helvetica Neue',Helvetica,Arial,sans-serif;
    font-weight: 700;
    margin: 0;
    padding: 10px 25px;
    font-size: 1.5rem;
    line-height: 1.8rem;
    box-sizing: border-box;
    vertical-align: middle;
}
.columns .sidebar-main {
  -webkit-flex-grow: 1;
    flex-grow: 1;
    -ms-flex-order: 1;
    -webkit-order: 1;
    order: 1;
}
.cart-totals .table-wrapper {
    margin-bottom: 0;
    overflow: inherit;
}
.sidebar {
    width: 100%;
}

.cart-summary {
    border: 1px solid #dedede;
    margin: 0 0 30px;
    padding: 30px 25px;
    background-color: #fff;
    position: static;
}

.cart-summary>.title {
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    display: block;
    text-transform: uppercase;
    margin: 0 0 10px;
}
.cart-summary .cart-totals {
    padding: 0;
    border: none;
    margin-bottom: 27px;
}
.cart-totals {
    border-top: 1px solid #000;
    padding-top: 11px;
}
.cart-summary .cart-totals table {
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    color: #030303;
}

.cart-summary .cart-totals table tbody tr .mark {
    padding-right: 10px;
}
.cart-summary .cart-totals table tbody tr th{
  padding: 4px 0;
}
.cart-totals .mark{
    font-weight: 400;
    padding-left: 4px;
}
.table-wrapper table {
    background-color: #fff;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    max-width: 100%;
}
.table-wrapper table>tbody>tr>th{
  vertical-align: top;
}
.table-wrapper table th {
    text-align: left;
}
.cart-totals .amount {
    padding-right: 4px;
    text-align: right;
    white-space: nowrap;
}
.cart-summary .cart-totals table tbody .grand.totals th, .cart-summary .cart-totals table tbody .grand.totals td {
    line-height: 23px;
    border-top: 1px solid #d6d6d6;
    padding-top: 23px;
}
.cart-totals .mark strong {
    font-weight: 400;
}
.cart-summary .cart-totals table tbody .grand.totals td .price {
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
}
.button-checkout-cart{

}

@media (min-width: 768px) {
  .checkout-cart-index .page-main {
    max-width: 1340px;
    margin: 0 auto;
  }
  .checkout-cart-index .page-main {
    padding-bottom: 50px;
  }
  .page-main {
    padding-left: 50px;
    padding-right: 50px;
  }
  .page-main {
    width: 100%;
  }
  .column.main {
    min-height: 300px;
  }
  .page-layout-2columns-right .main {
    padding-right: 32px;
  }
  .checkout-cart-index.page-layout-2columns-right .column.main {
    width: 100%;
    padding-right: 0;
  }
  .page-layout-2columns-right .column.main {
    width: 77%;
    float: left;
    -ms-flex-order: 1;
    -webkit-order: 1;
    order: 1;
  }
  .page-title-wrapper .page-title {
    font-size: 24px;
    line-height: 28px;
  }
  .page-main > .page-title-wrapper .page-title {
    display: inline-block;
  }
  .checkout-cart-index .page-title-wrapper:before {
    margin-right: 30px;
    margin-top: 4px;
  }
  .abs-shopping-cart-items-desktop,
  .block-cart-failed,
  .cart-container .form-cart,
  .cart-container .cart-gift-item,
  .block-cart-failed,
  .cart-container .form-cart,
  .cart-container .cart-gift-item {
    width: 100%;
    float: none;
  }
  .abs-shopping-cart-items-desktop,
  .block-cart-failed,
  .cart-container .form-cart,
  .cart-container .cart-gift-item {
    float: left;
    position: relative;
    width: 73%;
  }
  .form.form-cart {
    margin-bottom: 50px;
  }
  .cart-checkout.table-wrapper .cart-count {
    font-size: 16px;
  }
  .cart-checkout.table-wrapper .cart-count {
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    margin-bottom: 10px;
  }
  .cart-checkout.table-wrapper .items {
    min-width: 100%;
    width: auto;
  }
  table {
    background-color: #fff;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    max-width: 100%;
  }
  .cart-checkout.table-wrapper .cart-item .product-item-photo {
    padding: 0;
    width: 120px;
    min-width: 120px;
  }
  .cart-checkout.table-wrapper .product-item-photo {
    display: table-cell;
    max-width: 100%;
    padding-right: 22px;
    position: static;
    vertical-align: top;
    width: 1%;
  }
  .cart-checkout.table-wrapper .product-item-details {
    display: table-cell;
    vertical-align: top;
    white-space: normal;
    width: 99%;
  }
  .cart-checkout .action {
    margin-bottom: 11px;
  }
  .checkout-cart-index.page-layout-2columns-right .sidebar-main {
    width: 100%;
  }
  .page-layout-2columns-right .sidebar-main {
    padding-left: 0;
    padding-right: 0;
  }

  .page-layout-2columns-right .sidebar-main {
    width: 23%;
    float: left;
    -ms-flex-order: 1;
    -webkit-order: 1;
    order: 1;
  }
  .cart-summary {
    width: 100%;
    float: none;
    position: static;
  }

}
@media (min-width:1024px) {
  .checkout-cart-index.page-layout-2columns-right .column.main {
    width: 71%;
    padding-right: 60px;
  }
  .checkout-cart-index.page-layout-2columns-right .sidebar-main {
    width: 29%;
  }
}
</style>
