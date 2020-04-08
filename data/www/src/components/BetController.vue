<template lang="pug">
  div
    select( v-model="selectedCoin" )
      option( v-for="(cal, unit) in tipTypes" :value="unit" :key=unit ) {{ unit }}円チップ
    div を
    select( v-model="selectedParticipant" )
      option( v-for="(cal, unit) in participants" :value="unit" :key=unit ) {{ unit }}
    div に
    input( type="numeric" v-model="betAmount" :max="maxOfTip" min="0")
    //- TODO: max以上の数字を入れられたらエラーメッセージ表示
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
      // TODO: 持ってる数より大きな値が入ってきた時の処理を追加
    }
  }
}
</script>

<style scoped>

</style>
