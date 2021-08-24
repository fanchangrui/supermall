import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    cartList:[]
  },
  mutations:{
      /*addCounter(state,payload){
        payload.count++
      },
      addToCart(state,payload){
        state.cartList.push(payload)
      }*/
  },
  actions:{
    addCart(context,payload){
      let oldProduct = context.state.cartList.find(function (item){
        return item.iid === payload.iid
      })
      if(oldProduct){
        /*context.commit('addCounter',oldProduct)*/
        oldProduct.count += 1
      }else {
       /*context.commit('addToCart',oldProduct)*/
        payload.count = 1
        payload.checked = true
        context.state.cartList.push(payload)
        console.log(payload.title)
        console.log(payload.newPrice)
      }

    }
  },
  getters:{
    cartList(state) {
      return state.cartList
    },
    cartCount(state, getters) {
      return getters.cartList.length
    }
  }
})

export default store
