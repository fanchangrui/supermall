<template>
  <div class="cart">
    <nav-bar class="nav-bar">
        <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <cart-list class="cart-list"/>
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "views/cart/childComps/CartList";
import CartBottomBar from "views/cart/childComps/CartBottomBar";
  export default {
    name: "Cart",
    components:{
      NavBar,
      CartList,
      CartBottomBar
    },
    computed:{
      cartLength(){
        return this.$store.state.cartList.length
      }
    }
  }
</script>

<style scoped>
.nav-bar {
  background-color: red;
  color: white;
}
.cart{
  height: 100vh;
}
.cart-list {
  position: absolute;
  top: 44px;
  bottom: 49px;
  width: 100%;
}

</style>
