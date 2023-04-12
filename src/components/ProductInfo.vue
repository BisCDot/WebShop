<template>
    <div class="product-content">
        <div class="product-title">
            <h1 class="title-head">{{ Products.productName }}</h1>
        </div>
        <div class="product-info-price">
            <div class="product-info-review"></div>
            <div class="price-box">
                <span class="price">{{ convertMoney(Products.price) }}</span>
            </div>
        </div>
        <div class="swatch-size">
            <span class="swatch-label">
                Chọn Size: <span id="text-size">{{ pickSize }}</span>
            </span>
            <div class="watch-selected-size" >
                <label v-for="(productDetails, index) in Products.productDetailDtos" :key="index">
                    <input type="radio" name="swatch_1234" :value="productDetails.id" v-model="pickSize"  />
                    <span class="item-show">
                        <div class="mona-bg">{{ productDetails.size }}</div>
                    </span>
                </label>

            </div>

        </div>
        <div class="product-options-bottom">
            <div class="box-tocart">
                <div class="fieldset">
                    <div class="label">
                        <span>Chọn số lượng :</span>
                        <span id="qty_equal">{{ quantity }}</span>
                    </div>
                    
                </div>
                <span class="error-message" v-if="!formIsValid">Bạn chưa chọn size </span>
                <div class="box-tocart-field">
                    <div class="quantity-input">
                        <QuantityInput :quantity="quantity" @addQuantity="addQuantity" @removeQuantity="removeQuantity" />
                    </div>
                    <AppButton :buyProduct="buyProduct" />
                   
                </div>

            </div>
        </div>



    </div>

</template>
<script>
import QuantityInput from './QuantityInput.vue';
import AppButton from '@/components/AppButton.vue'

export default {
    props: {
        Products: {
            type: String,
            default() {
                return "";
            }
        },


    },
    data() {
        return {
            quantity: 1,
            pickSize: "",
            formIsValid : true
            
        };
    },
    emits: ["buyProduct"],
    methods: {
        convertMoney(num) {
            return num.toLocaleString("it-IT", { style: "currency", currency: "vnd" });
        },
        addQuantity() {
            this.quantity++;
        },
        removeQuantity() {
            if (this.quantity >= 1) this.quantity--;
        },
        buyProduct() {
            this.formIsValid = true
            if (this.quantity <= 0 || this.pickSize === '') {
                this.formIsValid = false
                return
            }else{

                this.$emit("buyProduct", this.quantity, this.pickSize);
            }
        }

    },

    components: { QuantityInput, AppButton }
}
</script>
<style>
.error-message{
    color: red;
    padding-top: 2px;
}
.product-content {
    width: 50%;
    float: right;
    padding: 0px 15px 0px 15px;
}

.product-title h1 {
    font-family: 'Roboto Condensed', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    display: flex;
    font-size: 20px;
    font-weight: 700;
    color: #000;
    text-transform: uppercase;
    margin-top: 24px;
    width: 100%;
    margin-right: 24px;

}

.product-content .product-info-price .product-info-review {
    display: flex;
    -webkit-flex-wrap: wrap;
    align-items: center;
    margin-bottom: 25px;
    width: 100%;
}

.title-head {}

.product-info-price .price-box .price {
    font-weight: 700;
    display: flex;
    font-size: 24px;
    line-height: 28px;
    color: #000;
    text-align: left;
}

.product-content .swatch-size {
    margin-top: 25px;

}

.product-content .swatch-size .watch-selected-size {
    display: flex;
    border: 1px solid #ccc;
    border-radius: 15px;
    width: auto;
    padding: 20px;
}

.product-content .swatch-size .swatch-label {
    display: flex;
}

.product-content .swatch-size .watch-selected-size label {
    display: inline-block;
    height: 40px;
    width: 40px;
    position: relative;
    margin: 0 2px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
}

.product-content .swatch-size .watch-selected-size span {
    display: block;
    position: absolute;
    border-radius: 3px;
    border: 1px solid #ccc;
    border-radius: 10px;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    align-items: center;
}

.watch-selected-size input {
    display: none;
}

.mona-bg {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

input:checked+span {
    border-radius: 10px;
    border: 1px solid #D87C7C;
    background: url(https://theme.hstatic.net/1000290074/1000781377/14/bg-variant-checked.png)no-repeat right bottom #fff;
}

#text-size {
    margin-left: 5px;
    font-weight: 700;
}

.product-content .box-tocart .label {
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    margin-bottom: 0;
}

.label {
    color: #333;

}

.product-content .box-tocart .label #qty_equal {
    font-weight: 700;
    margin-left: 13px;
}
.quantity-input{
    width: 120px;
    padding-right: 16.5px;
}
.product-content .box-tocart {
    margin: 20px 0 0;
}

.product-content .box-tocart .box-tocart-field {
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    display: -webkit-flex;
    display: flex;
    max-width: 600px;
}

@media only screen and (min-width: 768px) {
    .product-content .product-title .title-head {
        margin: 20px 0;
    }
}
</style>