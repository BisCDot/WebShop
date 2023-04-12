<template >
    <div class="primary">
      <button type="submit" class="button action continue primary" @click="ClickButton">
        <span>
          <span>{{contentButton}}</span>
        </span>
      </button>
    </div>
</template>
<script>
export default {
    props : {
        contentButton : String,
        ClickButton : {
            type: Function,
        }

    }
};
</script>
<style >
.action.primary {
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
</style>
