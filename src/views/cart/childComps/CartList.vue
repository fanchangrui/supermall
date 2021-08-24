<template>
<div class="cart-list">
  <cart-list-item v-for="(item,index) in cartList" :item-info="item" :key="index"/>

</div>
</template>

<script>
import {mapGetters} from 'vuex'
import Scroll from "components/common/scroll/Scroll";
import CartListItem from "views/cart/childComps/CartListItem";

export default {
  name: "CartList",
  components:{
    Scroll,
    CartListItem
  },
  computed:{
    ...mapGetters(['cartList'])
  }
}
</script>

<style scoped>

/*.content{
  height: calc(100% - 44px);
}
.cart-list{
  height: 100vh;
}*/
</style>
