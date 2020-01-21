<template lang='pug'>
  div
    div Coin is {{ coin }}
</template>

<script>
export default {
  name: 'game-state',
  computed: {
    coin () {
      return this.$store.state.coin
    }
  }
}
</script>

<style>

</style>
