<template >
    <header id="header">
        <div class="menu-button" 
        
        @click="showMenu = !showMenu"
        >
            <div id="nav-icon3">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div id="top-bar">
        <h3>Dashboard</h3>
        </div>
    </header>
    <nav id="sidemenu" :class="{open : showMenu}">
 <div class="main-menu">
  <ul class='main-menu'>
   <li class="link-active">
    <a href="#">
		
     <box-icon class="glyphicon" name='home' color='#f7f4f4' ></box-icon> <label>Điều Khiển</label> 
    </a>
   </li>
   <li>
    <a href="#">
		<box-icon class="glyphicon" name='cart-add' type='solid' color='#e4e4e4' ></box-icon><label>Sản Phẩm</label>
    </a>
   </li>
   <li>
    <a href="#">
		<box-icon class="glyphicon" name='task' color='#e4e4e4' ></box-icon> <label>Đơn Hàng</label>
    </a>
   </li>
   <li>
    <a href="#">
     <span class='glyphicon glyphicon-book'></span> Pages
    </a>
   </li>
   <li>
    <a href="#">
     <span class='glyphicon glyphicon-comment'></span> Comments
    </a>
   </li>
  </ul>
  <ul class='main-menu bottom'>
   <li>
   </li>
   <li>
    <a href="#">
     <span class='glyphicon glyphicon-cog'></span> Settings
    </a>
   </li>
  </ul>
 </div>
</nav>
<div class="list-product-admin">
	<div class="container mt-5">
      <div class="row tm-content-row">
        <div class="col-sm-12 col-md-12 col-lg-8 col-xl-8 tm-block-col">
          <div class="tm-bg-primary-dark tm-block tm-block-products">
            <div class="tm-product-table-container">
              <table class="table table-hover tm-table-small tm-product-table">
                <thead>
                  <tr>
                    <th scope="col">&nbsp;</th>
                    <th scope="col">PRODUCT NAME</th>
                    <th scope="col">UNIT SOLD</th>
                    <th scope="col">IN STOCK</th>
                    <th scope="col">EXPIRE DATE</th>
                    <th scope="col">&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><input type="checkbox" /></th>
                    <td class="tm-product-name">Lorem Ipsum Product 1</td>
                    <td>1,450</td>
                    <td>550</td>
                    <td>28 March 2019</td>
                    <td>
                      <a href="#" class="tm-product-delete-link">
                        <i class="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><input type="checkbox" /></th>
                    <td class="tm-product-name">Lorem Ipsum Product 2</td>
                    <td>1,250</td>
                    <td>750</td>
                    <td>21 March 2019</td>
                    <td>
                      <a href="#" class="tm-product-delete-link">
                        <i class="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><input type="checkbox" /></th>
                    <td class="tm-product-name">Lorem Ipsum Product 3</td>
                    <td>1,100</td>
                    <td>900</td>
                    <td>18 Feb 2019</td>
                    <td>
                      <a href="#" class="tm-product-delete-link">
                        <i class="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><input type="checkbox" /></th>
                    <td class="tm-product-name">Lorem Ipsum Product 4</td>
                    <td>1,400</td>
                    <td>600</td>
                    <td>24 Feb 2019</td>
                    <td>
                      <a href="#" class="tm-product-delete-link">
                        <i class="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><input type="checkbox" /></th>
                    <td class="tm-product-name">Lorem Ipsum Product 5</td>
                    <td>1,800</td>
                    <td>200</td>
                    <td>22 Feb 2019</td>
                    <td>
                      <a href="#" class="tm-product-delete-link">
                        <i class="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><input type="checkbox" /></th>
                    <td class="tm-product-name">Lorem Ipsum Product 6</td>
                    <td>1,000</td>
                    <td>1,000</td>
                    <td>20 Feb 2019</td>
                    <td>
                      <a href="#" class="tm-product-delete-link">
                        <i class="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><input type="checkbox" /></th>
                    <td class="tm-product-name">Lorem Ipsum Product 7</td>
                    <td>500</td>
                    <td>100</td>
                    <td>10 Feb 2019</td>
                    <td>
                      <a href="#" class="tm-product-delete-link">
                        <i class="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><input type="checkbox" /></th>
                    <td class="tm-product-name">Lorem Ipsum Product 8</td>
                    <td>1,000</td>
                    <td>600</td>
                    <td>08 Feb 2019</td>
                    <td>
                      <a href="#" class="tm-product-delete-link">
                        <i class="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><input type="checkbox" /></th>
                    <td class="tm-product-name">Lorem Ipsum Product 9</td>
                    <td>1,200</td>
                    <td>800</td>
                    <td>24 Jan 2019</td>
                    <td>
                      <a href="#" class="tm-product-delete-link">
                        <i class="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><input type="checkbox" /></th>
                    <td class="tm-product-name">Lorem Ipsum Product 10</td>
                    <td>1,600</td>
                    <td>400</td>
                    <td>22 Jan 2019</td>
                    <td>
                      <a href="#" class="tm-product-delete-link">
                        <i class="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row"><input type="checkbox" /></th>
                    <td class="tm-product-name">Lorem Ipsum Product 11</td>
                    <td>2,000</td>
                    <td>400</td>
                    <td>21 Jan 2019</td>
                    <td>
                      <a href="#" class="tm-product-delete-link">
                        <i class="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- table container -->
            <a
              href="add-product.html"
              class="btn btn-primary btn-block text-uppercase mb-3">Add new product</a>
            <button class="btn btn-primary btn-block text-uppercase">
              Delete selected products
            </button>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4 tm-block-col">
          <div class="tm-bg-primary-dark tm-block tm-block-product-categories">
            <h2 class="tm-block-title">Product Categories</h2>
            <div class="tm-product-table-container">
              <table class="table tm-table-small tm-product-table">
                <tbody>
                  <tr>
                    <td class="tm-product-name">Product Category 1</td>
                    <td class="text-center">
                      <a href="#" class="tm-product-delete-link">
                        <i class="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="tm-product-name">Product Category 2</td>
                    <td class="text-center">
                      <a href="#" class="tm-product-delete-link">
                        <i class="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="tm-product-name">Product Category 3</td>
                    <td class="text-center">
                      <a href="#" class="tm-product-delete-link">
                        <i class="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="tm-product-name">Product Category 4</td>
                    <td class="text-center">
                      <a href="#" class="tm-product-delete-link">
                        <i class="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="tm-product-name">Product Category 5</td>
                    <td class="text-center">
                      <a href="#" class="tm-product-delete-link">
                        <i class="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="tm-product-name">Product Category 6</td>
                    <td class="text-center">
                      <a href="#" class="tm-product-delete-link">
                        <i class="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="tm-product-name">Product Category 7</td>
                    <td class="text-center">
                      <a href="#" class="tm-product-delete-link">
                        <i class="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="tm-product-name">Product Category 8</td>
                    <td class="text-center">
                      <a href="#" class="tm-product-delete-link">
                        <i class="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="tm-product-name">Product Category 9</td>
                    <td class="text-center">
                      <a href="#" class="tm-product-delete-link">
                        <i class="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="tm-product-name">Product Category 10</td>
                    <td class="text-center">
                      <a href="#" class="tm-product-delete-link">
                        <i class="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="tm-product-name">Product Category 11</td>
                    <td class="text-center">
                      <a href="#" class="tm-product-delete-link">
                        <i class="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- table container -->
            <button class="btn btn-primary btn-block text-uppercase mb-3">
              Add new category
            </button>
          </div>
        </div>
      </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return {
            showMenu : false
        }
    },
    methods : {
      
    }
}
</script>
<style >
#sidemenu {
	position: fixed;
	width: 60px;
	height: auto;
	top: 60px;
	bottom: 0;
	background: rgb(43, 43, 43);
	overflow: hidden;
	-webkit-transition: all .1s ease-in;
	-moz-transition: all .1s ease-in;
	-ms-transition: all .1s ease-in;
	-o-transition: all .1s ease-in;
	transition: all .1s ease-in;
	z-index: 5;
}

#sidemenu.open {
	width: 230px;
	-webkit-transition: all .3s ease-out;
	-moz-transition: all .3s ease-out;
	-ms-transition: all .3s ease-out;
	-o-transition: all .3s ease-out;
	transition: all .3s ease-out;
}

#nav-icon3 {
	width: 32px;
	height: 32px;
	position: relative;
	-webkit-transform: rotate(0deg);
	-moz-transform: rotate(0deg);
	-o-transform: rotate(0deg);
	transform: rotate(0deg);
	-webkit-transition: .5s ease-in-out;
	-moz-transition: .5s ease-in-out;
	-o-transition: .5s ease-in-out;
	transition: .5s ease-in-out;
	cursor: pointer;
	display: block;
}

#nav-icon3 span {
	display: block;
	position: absolute;
	height: 2px;
	width: 100%;
	background: #ffffff;
	border-radius: 9px;
	opacity: 1;
	left: 0;
	-webkit-transform: rotate(0deg);
	-moz-transform: rotate(0deg);
	-o-transform: rotate(0deg);
	transform: rotate(0deg);
	-webkit-transition: .25s ease-in-out;
	-moz-transition: .25s ease-in-out;
	-o-transition: .25s ease-in-out;
	transition: .25s ease-in-out;

}
#nav-icon3 span:nth-child(1) {
	top: 6px;
}

#nav-icon3 span:nth-child(2), #nav-icon3 span:nth-child(3) {
	top: 16px;
}

#nav-icon3 span:nth-child(4) {
	top: 26px;
}

#nav-icon3.open span:nth-child(1) {
	top: 18px;
	width: 0%;
	left: 50%;
}

#nav-icon3.open span:nth-child(2) {
	-webkit-transform: rotate(45deg);
	-moz-transform: rotate(45deg);
	-o-transform: rotate(45deg);
	transform: rotate(45deg);
}

#nav-icon3.open span:nth-child(3) {
	-webkit-transform: rotate(-45deg);
	-moz-transform: rotate(-45deg);
	-o-transform: rotate(-45deg);
	transform: rotate(-45deg);
}

#nav-icon3.open span:nth-child(4) {
	top: 18px;
	width: 0%;
	left: 50%;
}

#header .menu-button {
	position: fixed;
	top: 0;
	left: 0;
	height: 60px;
	background: rgb(5, 98, 167);
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	padding: 14px;
}

#header .menu-button img {
	max-width: 100%;
	height: auto;
}

#header .menu-button:hover {
	background: rgb(25, 114, 185);
	cursor: pointer;
}

#top-bar {
	position: fixed;
	display: block;
	top: 0;
	left: 60px;
	right: 0;
	height: 60px;
	width: auto;
	background: rgb(3, 78, 141);
	padding-left: 15px;
	padding-right: 15px;
	color: #ffffff;
	z-index: 5;
}

#content-wrapper {
	padding-top: 60px;
	padding-left: 60px;
}



@-webkit-keyframes fadeInFromNone {
	0% {
		display: none;
		bottom: -6px;
		opacity: 0;
	}

	1% {
		display: block;
		bottom: -5px;
		opacity: 0;
	}

	100% {
		display: block;
		bottom: 0;
		opacity: 1;
	}
}

@-moz-keyframes fadeInFromNone {
	0% {
		display: none;
		bottom: -6px;
		opacity: 0;
	}

	1% {
		display: block;
		bottom: -5px;
		opacity: 0;
	}

	100% {
		display: block;
		bottom: 0;
		opacity: 1;
	}
}

@-o-keyframes fadeInFromNone {
	0% {
		display: none;
		bottom: -6px;
		opacity: 0;
	}

	1% {
		display: block;
		bottom: -5px;
		opacity: 0;
	}

	100% {
		display: block;
		bottom: 0;
		opacity: 1;
	}
}

@keyframes fadeInFromNone {
	0% {
		display: none;
		bottom: -6px;
		opacity: 0;
	}

	1% {
		display: block;
		bottom: -5px;
		opacity: 0;
	}

	100% {
		display: block;
		bottom: 0;
		opacity: 1;
	}
}

/* NAV MENU  */

li .glyphicon {
	position:relative;
    top: calc(50% - 10px); /* 50% - 3/4 of icon height */
	width: 60px;
}
.link-active>a > label{
	position: relative;
    top: calc(50% - 20px);
}

li.link-active a, li.link-active a:hover, li.link-active a:focus {
	background-color: #4189C7;
	color: white;
}
.main-nav {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1;
}

.main-menu {
	width: 230px;
}
.main-menu ul {
	padding: 0;
	margin: 0;
	list-style: none;
}
.main-menu li a {
	display: block;
	height: 48px;
	line-height: 32px;
	font-size: 16px;
	text-decoration: none;
	color: #ffffff;
}
.main-menu li.link-active a {
	background-color: rgb(21, 71, 110);
}
.main-menu li.link-active:hover a {
	background-color: rgb(32, 82, 121);
}
.main-menu li:hover a {
	background-color: rgb(64, 64, 64);
}
.main-menu li a span {
	font-size: 18px;
	width: 60px;
	text-align: center;
	line-height: 48px;
	color: transparent;
	-webkit-text-stroke-width: 1px;
	-webkit-text-stroke-color: #ffffff;
}
.main-menu.bottom {
	position: absolute;
	bottom: 45px;
	border-top: 1px solid rgb(64, 64, 64);
}
.list-product-admin{
	
}
.tm-logout-icon {
  font-size: 1.5em;
}
.tm-mt-big {
  margin-top: 57px;
}
.tm-mb-big {
  margin-bottom: 60px;
}
.tm-mt-small {
  margin-top: 20px;
}
.tm-block-col {
  margin-bottom: 30px;
}
.tm-block {
  padding: 40px;
  -webkit-box-shadow: 1px 1px 5px 0 #455c71;
  -moz-box-shadow: 1px 1px 5px 0 #455c71;
  box-shadow: 1px 1px 5px 0 #455c71;
  min-height: 350px;
  height: 100%;
  max-height: 450px;
}
.tm-block-avatar,
.tm-block-settings {
  max-height: none;
}
.tm-block-avatar {
  height: auto;
}
.tm-block-h-auto {
  min-height: 1px;
  max-height: none;
  height: auto;
}
.tm-block-scroll {
  overflow-y: scroll;
}
.tm-block-overflow {
  overflow: hidden;
}
.tm-block-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 30px;
}
.dropdown-item,
.nav-link {
  padding: 15px 20px;
}
.dropdown-menu {
  font-size: 90%;
  color: #fff;
  background-color: #567086;
  border-radius: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  min-width: auto;
}
.dropdown-item {
  color: #fff;
  padding: 15px 30px;
}
.navbar-nav .active > .nav-link,
.navbar-nav .nav-link.active {
  background-color: #f5a623;
  color: #fff;
}
.navbar-nav .nav-link.active i {
  color: #fff;
}
.dropdown-item:focus,
.dropdown-item:hover {
  background-color: #567086;
}
.navbar-nav a:hover,
.navbar-nav a:hover i {
  color: #f5a623;
}
.nav-item {
  text-align: center;
}
.nav-item:last-child {
  margin-right: 0;
}
.dropdown-toggle::after {
  display: none;
}
.dropdown-menu {
  margin-top: 0;
  border: 0;
}
.tm-content-row {
  justify-content: space-between;
  margin-left: -20px;
  margin-right: -20px;
}
.tm-col {
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 50px;
}
.tm-col-big {
  width: 39%;
}
.tm-col-small {
  width: 21.95%;
}
.tm-gray-circle {
  width: 80px;
  height: 80px;
  background-color: #aaa;
  border-radius: 50%;
  margin-right: 15px;
}
.tm-notification-items {
  overflow-y: scroll;
  height: 90%;
}
.tm-notification-item {
  padding: 15px;
  background-color: #4e657a;
  color: #fff;
  font-size: 95%;
  margin-bottom: 15px;
}
.tm-notification-item:last-child {
  margin-bottom: 0;
}
.tm-notification-link {
  color: #f5a623;
}
.tm-text-color-secondary {
  color: #bdcbd8;
}
.tm-small {
  font-size: 90%;
}
.table {
  background-color: #50697f;
  color: #fff;
  font-size: 85%;
  margin-bottom: 0;
}

.table thead th {
  border-bottom: 0;
}
.tm-status-circle {
  display: inline-block;
  margin-right: 5px;
  vertical-align: middle;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin-top: -3px;
}
.moving {
  background-color: #9be64d;
  box-shadow: 0 0 8px #9be64d, inset 0 0 8px #9be64d;
}
.pending {
  background-color: #efc54b;
  box-shadow: 0 0 8px #efc54b, inset 0 0 8px #efc54b;
}
.cancelled {
  background-color: #da534f;
  box-shadow: 0 0 8px #da534f, inset 0 0 8px #da534f;
}
.tm-avatar {
  width: 345px;
}
.tm-avatar-container {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.tm-avatar-delete-link {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -25px;
  margin-top: -25px;
  z-index: 1000;
  padding: 14px;
  border-radius: 50%;
  background-color: rgba(57, 78, 100, 0.7);
  display: inline-block;
  width: 50px;
  height: 50px;
  text-align: center;
  display: none;
  transition: all 0.2s ease;
}
.tm-avatar-container:hover .tm-avatar-delete-link {
  display: block;
}
.tm-col-avatar {
  max-width: 425px;
  width: 37%;
  padding-left: 15px;
  padding-right: 15px;
}
.tm-col-account-settings {
  max-width: 822px;
  width: 63%;
  padding-left: 15px;
  padding-right: 15px;
}
.form-control {
  background-color: #54657d;
  color: #fff;
  border: 0;
}
.form-control:focus {
  background-color: #60738e;
  color: #fff;
  border-color: transparent;
  box-shadow: 0 0 0 0.1rem rgb(180, 206, 233, 0.5);
}
.form-group label {
  color: #fff;
  margin-bottom: 10px;
}
.tm-hide-sm {
  display: block;
}
.tm-list-group {
  counter-reset: myOrderedListItemsCounter;
  padding-left: 0;
}
.tm-list-group > li {
  list-style-type: none;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 8px;
}
.tm-list-group > li:hover {
  color: #0266c4;
}
.tm-list-group > li:before {
  counter-increment: myOrderedListItemsCounter;
  content: counter(myOrderedListItemsCounter) ".";
  margin-right: 0.5em;
}
.tm-list {
  padding-left: 30px;
}
.tm-list > li {
  margin-bottom: 20px;
}
.form-control {
  padding: 19px 18px;
  border-radius: 0;
  height: 50px;
}
.form-group {
  margin-bottom: 15px;
}
.btn {
  border-radius: 0;
  padding: 13px 28px;
  transition: all 0.2s ease;
  max-width: 100%;
}
.btn-small {
  padding: 10px 24px;
}
.btn-primary {
  color: #fff;
  background-color: #f5a623;
  border: 2px solid #f5a623;
  font-size: 90%;
  font-weight: 600;
}
.btn-primary:active,
.btn-primary:hover {
  color: #f5a623;
  background-color: transparent;
  border: 2px solid #f5a623;
}
.custom-file-input {
  cursor: pointer;
}
.custom-file-label {
  border-radius: 0;
}
.table td,
.table th {
  border-top: 1px solid #415a70;
  padding: 15px 25px;
  vertical-align: middle;
}
.tm-table-small td,
.tm-table-small th {
  padding-left: 12px;
  padding-right: 12px;
}
.table-hover tbody tr {
  transition: all 0.2s ease;
}
.table-hover tbody tr:hover {
  color: #a0c0de;
}
.tm-bg-primary-dark {
  background-color: #435c70;
}
.tm-bg-gray {
  background-color: rgba(0, 0, 0, 0.05);
}
.tm-table-mt {
  margin-top: 66px;
}
.page-item:first-child .page-link {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.page-item:last-child .page-link {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.page-link {
  padding: 12px 18px;
}
.page-link,
.page-link:hover {
  color: #000;
}
.page-item {
  margin-right: 18px;
}
.page-item:last-child {
  margin-right: 0;
}
.page-item.active .page-link {
  background-color: #e9ecef;
  border-color: #dee2e6;
  color: #000;
}
input[type="checkbox"] {
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  background-color: #394e64;
  background-position: center;
  border-radius: 50%;
  box-sizing: border-box;
  position: relative;
  box-sizing: content-box;
  width: 24px;
  height: 24px;
  transition: all 0.1s linear;
}
input[type="checkbox"]:checked {
  background:  #394e64 center no-repeat;
}
input[type="checkbox"]:focus {
  outline: 0 none;
  box-shadow: none;
}
.tm-block-products {
  min-height: 725px;
}
.tm-block-product-categories {
  min-height: 650px;
}
.tm-product-table-container {
  max-height: 465px;
  margin-bottom: 15px;
  overflow-y: scroll;
}
.tm-product-table tr {
  font-weight: 600;
}
.tm-product-name {
  font-size: 0.95rem;
  font-weight: 600;
}
.tm-product-delete-icon {
  font-size: 1.1rem;
  color: #fff;
}
.tm-product-delete-link {
  padding: 10px;
  border-radius: 50%;
  background-color: #394e64;
  display: inline-block;
  width: 40px;
  height: 40px;
  text-align: center;
}
.tm-product-delete-link:hover .tm-product-delete-icon {
  color: #6d8ca6;
}
.custom-select {
  width: 100%;
  border: none;
  color: #acc6de;
  height: 50px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  -ms-border-radius: 0;
  -o-border-radius: 0;
  border-radius: 0;
  padding: 15px;
}
.custom-select:focus {
  outline: 0;
}
.tm-trash-icon {
  color: #6e6c6c;
  cursor: pointer;
}
.tm-trash-icon:hover {
  color: #9f1321;
}
.tm-footer {
  background-color: #567086;
  padding-top: 30px;
  padding-bottom: 30px;
  -webkit-box-shadow: 0 -3px 5px 0 rgba(69, 92, 113, 0.59);
  -moz-box-shadow: 0 -3px 5px 0 rgba(69, 92, 113, 0.59);
  box-shadow: 0 -3px 5px 0 rgba(69, 92, 113, 0.59);
}
.custom-select {
  height: 50px;
  border-radius: 0;
}
.tm-product-img-dummy {
  max-width: 100%;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: #aaa;
}
.tm-product-img-edit {
  max-width: 100%;
  position: relative;
}
.tm-product-img-edit i {
  display: none;
  position: absolute;
}
.tm-product-img-edit:hover i {
  display: block;
}
.tm-upload-icon {
  background: #455c71;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  text-align: center;
  padding-top: 15px;
  font-size: 22px;
}
.tm-login-col {
  max-width: 470px;
}
.navbar-toggler {
  border-color: #708da8;
  box-shadow: rgba(255, 255, 255, 0.1) 0 1px 1px 2px;
  border-radius: 0;
  padding: 10px 15px;
  transition: all 0.2s ease;
}
.navbar-toggler:hover {
  border-color: #f5a623;
  color: #f5a623;
}
.tm-nav-icon {
  color: #fff;
}
.navbar-toggler:hover .tm-nav-icon {
  color: #f5a623;
}
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
/* ::-webkit-scrollbar-track {
  background: #394f62;
} */
/* ::-webkit-scrollbar-thumb {
  background: #6d8da6;
}
::-webkit-scrollbar-thumb:hover {
  background: #8ab5d6;
} */

.tm-content-row {
    justify-content: space-between;
    margin-left: -20px;
    margin-right: -20px;
}


@media (min-width: 1200px) {
  .navbar-expand-xl .navbar-nav .nav-link {
    padding-left: 28px;
    padding-right: 28px;
  }
  .container {
    max-width: 1140px;
	}
  .navbar-collapse {
    height: 100%;
  }
}
@media (min-width: 992px) {
  .navbar-expand-lg .navbar-nav .nav-link {
    padding: 15px 20px;
  }
}
@media (max-width: 1275px) and (min-width: 1200px) {
  .nav-item {
    margin-right: 15px;
  }
}
@media (max-width: 1350px) {
  .nav-item {
    margin-right: 1px;
  }
}
@media (max-width: 1199px) {
  .tm-col-big,
  .tm-col-small {
    width: 49.65%;
  }
  .navbar-collapse {
    padding: 0;
    box-shadow: rgba(255, 255, 255, 0.1) 0 1px 1px 1px;
    position: absolute;
    top: 72px;
    right: 20px;
    width: 200px;
    z-index: 1000;
  }
  .dropdown-menu {
    text-align: center;
  }
  .nav-link {
    color: #fff;
    background-color: #567086;
    padding: 15px;
    flex-direction: row;
  }
  .nav-link > i {
    font-size: 1rem;
    margin-right: 10px;
    margin-bottom: 0;
  }
  .nav-item {
    margin-right: 0;
  }
  .tm-block-taller {
    max-height: 520px;
  }
}
@media (max-width: 1199.98px) {
  .navbar-expand-xl > .container,
  .navbar-expand-xl > .container-fluid {
    padding-left: 15px;
    padding-right: 15px;
  }
  .navbar-collapse {
    right: 15px;
  }
}
@media (max-width: 991px) {
  .tm-col-big,
  .tm-col-small {
    width: 100%;
    min-height: 383px;
    height: auto;
  }
  .tm-block {
    padding: 30px;
  }
}
@media (max-width: 767px) {
  .tm-col-account-settings,
  .tm-col-avatar {
    width: 100%;
    max-width: 100%;
  }
  .tm-block-avatar {
    display: flex;
    flex-direction: column;
  }
  .tm-avatar {
    align-self: center;
  }
  .tm-hide-sm {
    display: none;
  }
}
@media (max-width: 633px) {
  .page-item {
    margin-top: 10px;
  }
  .custom-select {
    background-position: 96%;
  }
}
@media (max-width: 574px) {
  .navbar-collapse {
    top: 47px;
  }
  .navbar {
    height: 50px;
  }
  .tm-site-title {
    font-size: 1.4rem;
    margin-left: 7px;
  }
  .tm-site-icon {
    font-size: 2em;
  }
}
@media (max-width: 480px) {
  .tm-mt-big {
    margin-top: 45px;
  }
  .tm-mb-big {
    margin-bottom: 45px;
  }
#barChart,
#lineChart {
    max-height: 350px;
  }
}

</style>