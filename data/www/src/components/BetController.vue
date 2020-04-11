<template lang="pug">
  div
    select( v-model="selectedCoin" )
      option( v-for="(cal, unit) in tipTypes" :value="unit" :key=unit ) {{ unit }}円チップ
    div を
    select( v-model="selectedParticipant" )
      option( v-for="(cal, unit) in participants" :value="unit" :key=unit ) {{ unit }}
    div に
    input( type="numeric" v-model="betAmount" :max="maxOfTip" min="0")
    .error#more-than-have( v-show="invalidTipNum") ※ 所持しているチップよりも小さい数を入力してください
    div 枚
    button(v-on:click="onClickBetButton") ベットする
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { tipTypes } from '../tip'
import { PARTICIPANTS } from '../geme'

export default {
  name: 'bet-controller',
  data: function () {
    return {
      tipTypes: tipTypes,
      selectedCoin: '1000',
      participants: PARTICIPANTS,
      selectedParticipant: PARTICIPANTS.player,
      betAmount: 0
    }
  },
  computed: {
    ...mapState([
      'bettingTips',
      'havingTips'
    ]),
    maxOfTip: function () {
      return this.havingTips[this.selectedCoin]
    },
    invalidTipNum: function () {
      if (this.betAmount > this.havingTips[this.selectedCoin]) {
        return true
      }
      return false
    }
  },
  methods: {
    ...mapMutations([
      'betTip',
      'useTip'
    ]),
    onClickBetButton: function () {
      this.betTip({
        par: this.selectedParticipant,
        coin: this.selectedCoin,
        amount: parseInt(this.betAmount)
      })
      this.useTip({coin: this.selectedCoin, amount: this.betAmount})
    }
  }
}
</script>

<style scoped>

.error {
  color: red
}
</style>
