<template lang='pug'>
  div
    div 使用した金額: {{ usedMoney }}円
    div 所持チップ合計: {{ tipSum }}円
      table( v-for="(val, unit) in tipTypes" :key=unit )
        tr
          th
            button(v-on:click="addTip({unit: unit, amount: 1})") 購入
          th 所持{{ unit }}円チップ：{{ havingTips[unit] }}個
          th
            button(v-on:click="betTip({unit: unit, amount: 1})") ベット
          th ベット{{ unit }}円チップ：{{ bettingTips[unit] }}個
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'

import { tipTypes } from '../tip'

export default {
  name: 'game-state',
  data: function () {
    return {
      tipTypes: tipTypes
    }
  },
  computed: {
    ...mapState([
      'usedMoney',
      'havingTips',
      'bettingTips'
    ]),
    ...mapGetters([
      'tipSum'
    ])
  },
  methods: {
    ...mapMutations([
      'addTip',
      'betTip'
    ])
  }
}
</script>

<style>

</style>
