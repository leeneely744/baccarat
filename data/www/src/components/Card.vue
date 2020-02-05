<template>
  <div class="card">
    <img :src="image" height="140">
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    cardName: {
      type: String,
      required: true
    }
  },
  computed: {
    image: function () {
      if (this.cardName === null || this.cardName === undefined) {
        return require(`../assets/card_back.png`)
      } else {
        return require(`../assets/card_${this.cardName}.png`)
      }
    }
  }
}
</script>
