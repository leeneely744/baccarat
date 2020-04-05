<template lang="pug">
  div
    select( v-model="selectedCoin" )
      option( v-for="(cal, unit) in tipTypes" :value="unit" :key=unit ) {{ unit }}円
    div を
    select( v-model="selectedParticipant" )
      option( v-for="(cal, unit) in participants" :value="unit" :key=unit ) {{ unit }}
    div に
    input( type="numeric" :max="maxOfTip" min="0")
    //- TODO: max以上の数字を入れられたらエラーメッセージ表示
    div 枚ベットする
    //- 「ベットする」の部分をボタンにする
</template>

<script>
import { mapState } from 'vuex'
import { tipTypes } from '../tip'
import { PARTICIPANTS } from '../geme'

export default {
  name: 'bet-controller',
  data: function () {
    return {
      tipTypes: tipTypes,
      selectedCoin: '1000',
      participants: PARTICIPANTS,
      selectedParticipant: PARTICIPANTS.player
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
  }
}
</script>

<style scoped>

</style>
