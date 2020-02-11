<template>
  <div>
    <div>
      Banker's field
      <div class="card-field">
        <card :card-name="banker.card1" />
        <card :card-name="banker.card2" />
      </div>
      Player's field
      <div class="card-field">
        <card :card-name="player.card1" />
        <card :card-name="player.card2" />
      </div>
    </div>
    <button v-on:click="play()">ゲーム開始！</button>
  </div>
</template>

<script>
import card from './Card'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'game-board',
  props: {
    showModal: Function,
    hideModal: Function
  },
  computed: {
    ...mapState([
      'banker',
      'player'
    ])
  },
  components: {
    card
  },
  methods: {
    ...mapMutations([
      'drawing'
    ]),
    ...mapActions([
      'play',
      'extraPlay'
    ])
  }
}
</script>

<style>
.card-field {
  display: flex;
}
</style>
