// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'

import { tipState } from './tip'
import { drawCardFromDeck, deckInit } from './deck'
import { getCardNum } from './geme'

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
    },
    winners: []
  },
  getters: {
    bankerSum (state) {
      let card1 = getCardNum(state.banker.card1)
      let card2 = getCardNum(state.banker.card2)
      let card3 = getCardNum(state.banker.card3)
      return card1 + card2 + card3
    },
    playerSum (state) {
      let card1 = getCardNum(state.player.card1)
      let card2 = getCardNum(state.player.card2)
      let card3 = getCardNum(state.player.card3)
      return card1 + card2 + card3
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
    },
    pushWinner (state, payload) {
      let winners = Object.values(state.winners)
      winners.push(payload.winner)
      state.winners = winners
    }
  },
  actions: {
    play (ctx) {
      ctx.commit('drawing', {'people': 'banker', 'seq': 'card1'})
      ctx.commit('drawing', {'people': 'banker', 'seq': 'card2'})
      ctx.commit('drawing', {'people': 'player', 'seq': 'card1'})
      ctx.commit('drawing', {'people': 'player', 'seq': 'card2'})
    },
    extraPlay (ctx) {
      ctx.commit('drawing', {'people': 'banker', 'seq': 'card3'})
      ctx.commit('drawing', {'people': 'player', 'seq': 'card3'})
    }
  }
})
