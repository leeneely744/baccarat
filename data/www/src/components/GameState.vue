<template lang='pug'>
  div
    div 使用した金額は{{ usedMoney }}円です。
    div 所持しているチップ
      table( v-for="(val, unit) in tipTypes" :key=unit )
        tr
          th
            button(v-on:click="addTip({unit: unit, amount: 1})") {{ unit }}円チップ購入
          th 所持{{ unit }}円チップ：{{ havingTips["tip" + unit] }}個
</template>

<script>
import { mapState, mapMutations } from 'vuex'

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
      'havingTips'
    ])
  },
  methods: {
    ...mapMutations([
      'addTip'
    ])
  }
}
</script>

<style>

</style>
