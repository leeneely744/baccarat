// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'

import { tipState } from './tip'
import { drawCardFromDeck, deckInit } from './deck'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usedMoney: 0,
    tip: tipState,
    deck: deckInit,
    banker: {
      b_card1: null,
      b_card2: null,
      b_card3: null
    },
    player: {
      p_card1: null,
      p_card2: null,
      p_card3: null
    }
  },
  mutations: {
    addUsedMoney (state, amount) {
      state.usedMoney += amount
    },
    addTip (state, payload) {
      state.tip[`tip${payload.unit}`] += payload.amount
      state.usedMoney += payload.unit * payload.amount
    },
    drawing (state) {
      let {drawnCard, newDeck} = drawCardFromDeck(state.deck)
      state.deck = newDeck
      return drawnCard
    },
    play (state) {
      state.banker.card1 = this.drawing()
      state.banker.card2 = this.drawing()
      state.player.card1 = this.drawing()
      state.player.card2 = this.drawing()
    }
  }
})
