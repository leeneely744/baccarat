<template lang='pug'>
  div
    div 使用した金額: {{ usedMoney }}円
    div 所持チップ合計: {{ tipSum }}円
    table
      tr( v-for="(val, unit) in tipTypes" :key=unit )
        th
          button(v-on:click="addTip({unit: unit, amount: 1})") 購入
        th 所持{{ unit }}円チップ：{{ havingTips[unit] }}個
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
