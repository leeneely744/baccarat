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
      card1: null,
      card2: null,
      card3: null
    },
    player: {
      card1: null,
      card2: null,
      card3: null
    }
  },
  getter: {
    fetchDrawnCard: (state) => (people, seq) => {
      return state[people][seq]
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
    drawing (state, payload) {
      let result = drawCardFromDeck(state.deck)
      let people = payload['people']
      let seq = payload['seq']
      state.deck = result.deck
      state[people][seq] = result.card
    }
  }
})
