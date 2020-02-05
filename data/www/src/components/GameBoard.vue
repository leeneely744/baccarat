<template>
  <div>
    <div>
      Banker's field
      <div class="card-field">
        <card card-name='spade_08' />
      </div>
    </div>
    <button v-on:click="play()">ゲーム開始！</button>
  </div>
</template>

<script>
import card from './Card'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'game-board',
  computed: {
    ...mapState([
      'b_card1',
      'b_card2',
      'b_card3',
      'p_card1',
      'p_card2',
      'p_card3'
    ])
  },
  components: {
    card
  },
  methods: {
    ...mapMutations([
      'play'
    ])
  }
}
</script>

<style>
.card-field {
  display: flex;
}
</style>
