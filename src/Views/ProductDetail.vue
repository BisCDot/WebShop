<template>
    <div class="container">
      <ProductCarousel :images="products.image"/>
    <ProductInfo :Products="products" @buyProduct="buyProductCheckOut" :quantity="quantity" :pickSize="pickSize"></ProductInfo>
    </div>


</template>

<script>

import ProductCarousel from "@/components/ProductCarousel.vue"
import ProductInfo from "@/components/ProductInfo.vue"
import axios from "axios";
export default {
name: 'ProductDetails',
created(){
        axios.get("https://localhost:5001/api/products/"+ this.$route.params.productID).then(response=> {
          this.products = response.data
          console.log(response.data.image)
      }).catch(e => {
        console.log(e);
  });
},
components :{
  ProductCarousel,
  ProductInfo
  
},
data () {
  return {
    products: [],
    quantity : 0,
    pickSize : ""
    
    // collection: [
    //                  {   id : 1,
    //                      nameProduct : "Cosy Crew Neck Jumper",
    //                      imageProduct : "https://xcdn.next.co.uk/COMMON/Items/Default/Default/ItemImages/AltItemSearch/M96676.jpg",
    //                      price : 575000,
    //                  },
    //                  {
    //                      id : 2,
    //                      nameProduct : "Áo hoodie ấm áp",
    //                      imageProduct : "https://res.cloudinary.com/dfsr668u3/image/upload/v1666076040/1660621276a371d6bde9e922d0c28b941c52d81299_thumbnail_600x_fgvrmv.webp",
    //                      price : 244000,
    //                  },
    //                  {
    //                      id : 3,
    //                      nameProduct : "Bộ âu phục nữ",
    //                      imageProduct : "https://res.cloudinary.com/dfsr668u3/image/upload/v1666078578/16644211675171230b16d64f601df2cf73d4d75cc8_thumbnail_600x_qq2w9l.webp",
    //                      price : 1004000,
    //                  },
    //                  {
    //                      id : 4,
    //                      nameProduct : "Hoodie Chất rắn",
    //                      imageProduct : "https://img.ltwebstatic.com/images3_pi/2021/09/27/16327330002059d290adcdb036a4b222d13ada02eb_thumbnail_600x.webp",
    //                      price : 262000,
    //                  },
    //                  {
    //                      id : 5,
    //                      nameProduct : "Áo khoác Nam",
    //                      imageProduct : "https://img.ltwebstatic.com/images3_pi/2022/08/18/16608102560d744ea0c80cdbbbb548a34eff0945c9_thumbnail_600x.webp",
    //                      price : 444800,
    //                  },
    //                  {
    //                      id : 6,
    //                      nameProduct : "ROMWE Quần thể thao ",
    //                      imageProduct : "https://img.ltwebstatic.com/images3_pi/2022/09/26/1664171217958db22aae6ca780b7e25aac92333b67_thumbnail_600x.webp",
    //                      price : 332000,
    //                  },
    //                  {  
    //                      id : 7,
    //                      nameProduct : "Áo choàng Nam ",
    //                      imageProduct : "https://img.ltwebstatic.com/images3_pi/2022/10/07/166512450941c2559175bd53838685e294c9ed1fd3_thumbnail_600x.webp",
    //                      price : 847000,
    //                  },
    //                  {  
    //                      id : 8,
    //                      nameProduct : "Áo khoác Trench ",
    //                      imageProduct : "https://img.ltwebstatic.com/images3_pi/2022/09/26/1664163897974e47095991f839607350834f41fdb8_thumbnail_600x.webp",
    //                      price : 884000,
    //                  },
    //         ],
    
  }
},
methods: {
  // buyProductCheckOut(products,quantity,pickSize){
  //     console.log("day la",products,quantity,pickSize);
  //     this.quantity= quantity;
  //     this.pickSize = pickSize;
  //     console.log(pickSize)
  // }
  
},
props : ["buyProductCheckOut"]

}


</script>

<style>




.container {
  margin-top: 102px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 15px 30px 15px;
  max-width: 1250px;

}

.attribution {
  margin-top: 5rem;
  font-size: 11px;
  text-align: center;
}
.attribution a {
  color: hsl(228, 45%, 44%);
}


</style>

