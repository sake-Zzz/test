import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartinfo: [],
    a: 0,
    money:0
  },
  mutations: {
    addcart(state, obj) {
      let message = state.cartinfo.find(item => item.id === obj.id)
      if (message) {
        message.count += 1
      }
      else {
        obj.count = 1
        state.cartinfo.push(obj)
      }

    }
  },
  getters:{
    moneys(state){
     let a=0
       for(let i = 0; i <state.cartinfo.length;i++){
         console.log(state.cartinfo[i].price)
        a += state.cartinfo[i] .count * state.cartinfo[i].price
         state.money =a 
      } 
      return state.money
      
    }
  },
  actions: {
  },
  modules: {
  }
})
