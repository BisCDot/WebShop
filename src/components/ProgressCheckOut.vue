<template>
  <div class="opc-progress-bar-wrapper">
    <a href="" class="action viewcart">
      <span>
        <box-icon name="left-arrow-alt"></box-icon>
        <span>Quay lại giỏ hàng</span>
      </span>
    </a>
    <ul class="opc-progress-bar">
      <li class="opc-progress-bar-item">
        <span>Đăng Nhập</span>
      </li>
      <li class="opc-progress-bar-item">
        <span>Địa Chỉ Giao Hàng</span>
      </li>
      <li class="opc-progress-bar-item">
        <span>Thanh Toán</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {

};
</script>
<style>
.opc-progress-bar-wrapper {
  position: relative;
}
.opc-progress-bar-wrapper .action.viewcart {
  display: inline-block;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #000;
  padding-left: 35px;
  margin-bottom: 40px;
  position: relative;
}
.opc-progress-bar-wrapper .action span box-icon {
  width: 20px;
  height: 20px;
  left: 0;
  top: 0;
  position: absolute;
}
.opc-progress-bar {
  position: relative;
  margin: 0 30px 71px;
  display: flex;
  -webkit-align-items: flex-start;
  align-items: flex-start;
  -webkit-justify-content: space-between;
  justify-content: space-between;
}

.opc-progress-bar .opc-progress-bar-item {
  width: 28px;
  counter-increment: list 1;
}
.opc-progress-bar-item {
  margin: 0 0 11px;
  display: inline-block;
  position: relative;
  text-align: center;
  vertical-align: top;
  width: 50%;
}
.opc-progress-bar .opc-progress-bar-item > span {
  position: absolute;
  top: 43px;
  left: 50%;
  -webkit-transform: translate(-50%, 0);
  -ms-transform: translate(-50%, 0);
  -o-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  white-space: nowrap;
  width: auto;
  padding: 0;
  color: #b7b7b7;
}
.opc-progress-bar:before {
  content: "";
  background-color: #c4c4c4;
  width: 100%;
  height: 2px;
  top: 13px;
  left: 0;
  position: absolute;
}
.opc-progress-bar-item > span {
  display: inline-block;
  padding-top: 45px;
  width: 100%;
  word-wrap: break-word;
  color: #e4e4e4;
  font-weight: 300;
  font-size: 1.8rem;
}

.opc-progress-bar-item {
  margin: 0 0 11px;
  display: inline-block;
  position: relative;
  text-align: center;
  vertical-align: top;
  width: 50%;
}
.opc-progress-bar-item > span {
  display: inline-block;
  padding-top: 45px;
  width: 100%;
  word-wrap: break-word;
  color: #e4e4e4;
  font-weight: 300;
  font-size: 1.8rem;
}
.opc-progress-bar .opc-progress-bar-item:after {
  content: counter(list);
  font-weight: 700;
  font-size: 15px;
  line-height: 28px;
  text-align: center;
  color: #fff;
  background: #b7b7b7;
  width: 28px;
  height: 28px;
  display: block;
  border-radius: 100%;
}
</style>
