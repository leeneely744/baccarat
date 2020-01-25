// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coin: 0,
    usedMoney: 0,
    tip: {
      tip1000: 0, // 1000円分のチップ
      tip5000: 0, // 5000円分のチップ
      tip10000: 0 // 10000円分のチップ
    }
  },
  mutations: {
    addUsedMoney (state, amount) {
      state.usedMoney += amount
    },
    addTip1000 (state, tipNum) {
      console.log('tipNum = ', tipNum)
      state.tip.tip1000 += tipNum
      state.usedMoney += 1000 * tipNum
    }
  }
})
