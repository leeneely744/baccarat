<template>
  <div>
    <div>
      Banker's field
      <div class="card-field">
        <card :card-name="banker.card1" />
        <card :card-name="banker.card2" />
        <card :card-name="banker.card3" />
      </div>
      Player's field
      <div class="card-field">
        <card :card-name="player.card1" />
        <card :card-name="player.card2" />
        <card :card-name="player.card3" />
      </div>
    </div>
    <button v-on:click="onClickPlayButton">ゲーム開始！</button>
  </div>
</template>

<script>
import card from './Card'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  name: 'game-board',
  props: {
    afterPlay: {
      type: Function,
      required: true
    }
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
      'play'
    ]),
    onClickPlayButton: function () {
      this.play()
      this.afterPlay()
    }
  }
}
</script>

<style>
.card-field {
  display: flex;
}
</style>
