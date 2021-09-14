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
      return new Promise((resolve,reject) => {
        let oldProduct = context.state.cartList.find(function (item){
          return item.iid === payload.iid
        })
        if(oldProduct){
          /*context.commit('addCounter',oldProduct)*/
          oldProduct.count += 1
          resolve('当前商品数量+1')
        }else {
          /*context.commit('addToCart',oldProduct)*/
          payload.count = 1
          payload.checked = true
          context.state.cartList.push(payload)
          resolve('当前添加成功')
          console.log(payload.title)
          console.log(payload.newPrice)
        }
      })

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
