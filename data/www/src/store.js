// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'

import { tipState } from './tip'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usedMoney: 0,
    tip: tipState
  },
  mutations: {
    addUsedMoney (state, amount) {
      state.usedMoney += amount
    },
    addTip (state, payload) {
      state.tip[`tip${payload.unit}`] += payload.amount
      state.usedMoney += payload.unit * payload.amount
    }
  }
})
