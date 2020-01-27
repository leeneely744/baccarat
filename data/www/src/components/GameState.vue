<template lang='pug'>
  div
    div 使用した金額は{{ usedMoney }}円です。
    div 所持しているチップ
      table
        tr
          th 1,000円チップ：{{ tip1000 }}
          th
            button(v-on:click="addTip({unit: 1000, amount: 1})") 1,000円チップ追加
        tr
          th 5,000円チップ：{{ tip5000 }}
          th
            button(v-on:click="addTip({unit: 5000, amount: 1})") 5,000円チップ追加
        tr
          th 10,000円チップ：{{ tip10000 }}
          th
            button(v-on:click="addTip({unit: 10000, amount: 1})") 10,000円チップ追加
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'game-state',
  computed: {
    ...mapState([
      'usedMoney',
      'tip1000',
      'tip5000',
      'tip10000'
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
