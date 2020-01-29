<template>
  <div class="card">
    <img :src="image" height="140">
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    cardNum: {
      type: String, // カードの数字を文字列数字として渡す
      required: true
    },
    picture: {
      type: String,
      required: true
    }
  },
  computed: {
    image: function () {
      const filename = `${this.picture}_${this.cardNum.padStart(2, '0')}`
      return require(`../assets/card_${filename}.png`)
    }
  }
}
</script>
