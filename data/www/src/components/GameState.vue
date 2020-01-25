<template lang='pug'>
  div
    div 使用した金額は{{ usedMoney }}円です。
    div 所持しているチップ
      ul
        li 10,000円チップ：{{ tip10000 }}
        li 5,000円のチップ：{{ tip5000 }}
        li 1,000円のチップ：{{ tip1000 }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'game-state',
  computed: mapState({
    usedMoney: state => state.usedMoney,
    tip1000: state => state.tip.tip1000,
    tip5000: state => state.tip.tip5000,
    tip10000: state => state.tip.tip10000
  })
}
</script>

<style>

</style>
