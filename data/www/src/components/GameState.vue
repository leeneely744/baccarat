<template lang='pug'>
  div
    div 使用した金額は{{ usedMoney }}円です。
    div 所持しているチップ
      table
        tr
          th 10,000円チップ：{{ tip1000 }}
          th
            button(v-on:click="addTip1000(1)") 1000円チップ追加
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'game-state',
  computed: mapState({
    usedMoney: state => state.usedMoney,
    tip1000: state => state.tip.tip1000,
    tip5000: state => state.tip.tip5000,
    tip10000: state => state.tip.tip10000
  }),
  methods: mapMutations([
    'addTip1000'
  ])
}
</script>

<style>

</style>
