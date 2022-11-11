<template>
  
    <div class="field qty">
      <span class="edit-qty minus" @click="$emit('removeQuantity')">
        <span>-</span>
      </span>
      <input type="number" name="qty" id="qty" class="input-text qty" :value=quantity maxlength="12">
      <span class="edit-qty plus" @click="$emit('addQuantity')">
        <span>+</span>
      </span>
    </div>
    
 
</template>
<script>
export default {
  props: {
    quantity: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  emits: ["addQuantity", "removeQuantity"],
}
</script>
<style scoped>

.field.qty {
    padding-right: 16.5px;
}
.field.qty {
    margin-right: 24px;
    width: 120px;
    border: 1px solid #bfbfbf;
    border-radius: 15px;
    position: relative;
    display: -webkit-flex;
    display: flex;
    margin-top: 17px;
}
.field.qty .minus {
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIzIiB2aWV3Qm94PSIwIDAgOCAzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNy40IDIuMDhWMEgwVjIuMDhINy40WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg==);
}
.field.qty .input-text.qty {
    color: #000;
    font-weight: 700;
    font-size: 18px;
    text-align: center;
    height: 46px;
    width: 40px;
    border: none;
    outline: none;
    background-color: #fff;
    border-radius: 0;
    box-shadow: none;
    min-width: 40px;
    padding: 0;
    line-height: 46px;
    
}
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
.field.qty .edit-qty {
    width: 40px;
    height: 46px;
    display: block;
    min-width: 40px;
    cursor: pointer;
    background-position: center;
    background-repeat: no-repeat;
}
.field.qty .plus {
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI5IiB2aWV3Qm94PSIwIDAgOSA5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNNS40MiAzLjM4VjBIMy4zOFYzLjM4SDBWNS40MkgzLjM4VjguOEg1LjQyVjUuNDJIOC44VjMuMzhINS40MloiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=);
}
.field.qty .edit-qty span {
    display: none;
}

</style>