<template>
<div id="slider">
    <div class="csslider infinity" id="slider1">
        <input type="radio" name="slides" checked="checked" id="slides_1"/>
        <input type="radio" name="slides" id="slides_2"/>
        <input type="radio" name="slides" id="slides_3"/>
        <ul>
        <li>
            <img src="@/assets/images/banner.jpg" />
        </li>
        <li><img src="@/assets/images/banner2.jpg" />
        </li>
        <li><img src="@/assets/images/banner3.jpg" />
        </li>
        
        </ul>
       
        <div class="navigation"> 
            <div>
            <label for="slides_1"></label>
            <label for="slides_2"></label>
            <label for="slides_3"></label>
            </div>
        </div>
    </div>
</div>

</template>
<script>
    export default{

    }
</script>
<style>
    

    #slider{
        display: block;
        margin-top: 102px;
        background-color: #ffff;
    }
    @import url(https://fonts.googleapis.com/css?family=Raleway:400,700|Lato);
.csslider {
  -moz-perspective: 1300px;
  -ms-perspective: 1300px;
  -webkit-perspective: 1300px;
  perspective: 1300px;
  display: inline-block;
  text-align: left;
  position: relative;
}
.csslider > input {
  display: none;
}
.csslider > input:nth-of-type(10):checked ~ ul li:first-of-type {
  margin-left: -900%;
}
.csslider > input:nth-of-type(9):checked ~ ul li:first-of-type {
  margin-left: -800%;
}
.csslider > input:nth-of-type(8):checked ~ ul li:first-of-type {
  margin-left: -700%;
}
.csslider > input:nth-of-type(7):checked ~ ul li:first-of-type {
  margin-left: -600%;
}
.csslider > input:nth-of-type(6):checked ~ ul li:first-of-type {
  margin-left: -500%;
}
.csslider > input:nth-of-type(5):checked ~ ul li:first-of-type {
  margin-left: -400%;
}
.csslider > input:nth-of-type(4):checked ~ ul li:first-of-type {
  margin-left: -300%;
}
.csslider > input:nth-of-type(3):checked ~ ul li:first-of-type {
  margin-left: -200%;
}
.csslider > input:nth-of-type(2):checked ~ ul li:first-of-type {
  margin-left: -100%;
}
.csslider > input:nth-of-type(1):checked ~ ul li:first-of-type {
  margin-left: 0%;
}
.csslider > ul {
  position: relative;
  width: 1400px;
  height: 700px;
  z-index: 1;
  font-size: 0;
  line-height: 0;
  background-color: #ffff;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.csslider > ul > li {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-size: 15px;
  font-size: initial;
  line-height: normal;
  -moz-transition: all 0.5s cubic-bezier(0.4, 1.3, 0.65, 1);
  -o-transition: all 0.5s ease-out;
  -webkit-transition: all 0.5s cubic-bezier(0.4, 1.3, 0.65, 1);
  transition: all 0.5s cubic-bezier(0.4, 1.3, 0.65, 1);
  vertical-align: top;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  white-space: normal;
}
.csslider > ul > li > img{
    height: 100%;
    width: 100%;
}
.csslider > ul > li.scrollable {
  overflow-y: scroll;
}
.csslider > .navigation {
  position: absolute;
  bottom: 30px;
  left: 50%;
  z-index: 10;
  margin-bottom: -10px;
  font-size: 0;
  line-height: 0;
  text-align: center;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.csslider > .navigation > div {
  margin-left: -100%;
}
.csslider > .navigation label {
  position: relative;
  display: inline-block;
  cursor: pointer;
  border-radius: 50%;
  margin: 0 4px;
  padding: 4px;
  background: #3A3A3A;
}
.csslider > .navigation label:hover:after {
  opacity: 1;
}
.csslider > .navigation label:after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -6px;
  margin-top: -6px;
  background: #ffff;
  border-radius: 50%;
  padding: 6px;
  opacity: 0;
}


.csslider > input:nth-of-type(1):checked ~ .navigation label:nth-of-type(1):after,
.csslider > input:nth-of-type(2):checked ~ .navigation label:nth-of-type(2):after,
.csslider > input:nth-of-type(3):checked ~ .navigation label:nth-of-type(3):after,
.csslider > input:nth-of-type(4):checked ~ .navigation label:nth-of-type(4):after,
.csslider > input:nth-of-type(5):checked ~ .navigation label:nth-of-type(5):after,
.csslider > input:nth-of-type(6):checked ~ .navigation label:nth-of-type(6):after,
.csslider > input:nth-of-type(7):checked ~ .navigation label:nth-of-type(7):after,
.csslider > input:nth-of-type(8):checked ~ .navigation label:nth-of-type(8):after,
.csslider > input:nth-of-type(9):checked ~ .navigation label:nth-of-type(9):after,
.csslider > input:nth-of-type(10):checked ~ .navigation label:nth-of-type(10):after,
.csslider > input:nth-of-type(11):checked ~ .navigation label:nth-of-type(11):after {
  opacity: 1;
}


/*#region MODULES */
/*#endregion */
/*___________________________________ LAYOUT ___________________________________ */
* {
  margin: 0;
  padding: 0;
}


#slider1 {
  margin: auto;
}


.scrollable p {
  padding: 30px;
  text-align: justify;
  line-height: 140%;
  font-size: 120%;
}
@media only screen and (max-width: 600px) {
  .csslider > ul{
    width: 100%;
    height: 10%;
  }
}



</style>