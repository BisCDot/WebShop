<template>
    <div class="actions">
      <button type="submit" title="Mua Ngay" class="action primary tocart" id="product-addtocart-button"
        @click=buyProduct>
        <span>Mua ngay</span>
      </button>
    </div>
</template>
<script>
    export default {
  props: ["buyProduct"],
  methods: {
    getImgUrl(pic) {
      return require(`../assets/images/${pic}`);
    },
  },
  
  
};
</script>
<style>
.product-content .box-tocart .actions {
    padding: 0;
    flex-grow: 1;
    -webkit-flex-grow: 1;
}
.product-content .box-tocart .action.primary {
    font-weight: 700;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 10px;
    width: 100%;
    display: block;
    margin-top: 17px;
}
.action.primary, .action-primary {
    background-image: none;
    background: #000;
    border: 2px solid #000;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: 'Roboto Condensed','Helvetica Neue',Helvetica,Arial,sans-serif;
    font-weight: 700;
    padding: 10px 25px;
    font-size: 1.5rem;
    line-height: 1.8rem;
    box-sizing: border-box;
    vertical-align: middle;
}
</style>