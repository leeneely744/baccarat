<template lang='pug'>
  div
    div 使用した金額は{{ usedMoney }}円です。
    div 所持しているチップ
      table
        tr
          th 所持1,000円チップ：{{ havingTips.tip1000 }}個
          th
            button(v-on:click="addTip({unit: 1000, amount: 1})") 1,000円チップ購入
        tr
          th 所持5,000円チップ：{{ havingTips.tip5000 }}個
          th
            button(v-on:click="addTip({unit: 5000, amount: 1})") 5,000円チップ購入
        tr
          th 所持10,000円チップ：{{ havingTips.tip10000 }}個
          th
            button(v-on:click="addTip({unit: 10000, amount: 1})") 10,000円チップ購入
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'game-state',
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
