<template lang='pug'>
  div
    div This is game-board component.
    card(cardNum=1 picture='club')
</template>

<script>
import card from './Card'

export default {
  name: 'game-board',
  components: {
    card
  }
}
</script>

<style>

</style>
