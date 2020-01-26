// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'

import { tipState } from './tip'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coin: 0,
    usedMoney: 0,
    tip: tipState
  },
  mutations: {
    addUsedMoney (state, amount) {
      state.usedMoney += amount
    },
    addTip1000 (state, tipNum) {
      state.tip.tip1000 += tipNum
      state.usedMoney += 1000 * tipNum
    },
    addTip5000 (state, tipNum) {
      state.tip.tip5000 += tipNum
      state.usedMoney += 5000 * tipNum
    },
    addTip10000 (state, tipNum) {
      state.tip.tip10000 += tipNum
      state.usedMoney += 10000 * tipNum
    }
  }
})
