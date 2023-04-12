<template>
  <div class="breadcrumbs">
    <ul class="items">
      <li class="item Home">
        <a>Trang Chủ</a>
      </li>
      <li class="item CheckOut">
        <strong>{{SecondStrong}}</strong>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    props : {
      SecondStrong : String,
    }
};
</script>
<style>
.breadcrumbs {
  font-weight: 400;
  text-align: center;
  margin: 10px 0px 3px;
  padding-top: 0;
  padding-bottom: 0;
}

.breadcrumbs .item {
  font-size: 13px;
  line-height: 15px;
  color: #787878;
}

.breadcrumbs .item:not(:last-child) {
  display: inline-block;
  text-decoration: none;
}
.breadcrumbs .item:not(:last-child)::after {
  content: "/";
  font-size: 13px;
  line-height: 15px;
  font-family: inherit;
}
.breadcrumbs .items > li {
  display: inline-block;
  vertical-align: top;
}
.breadcrumbs .item {
  margin: 0;
}
</style>
