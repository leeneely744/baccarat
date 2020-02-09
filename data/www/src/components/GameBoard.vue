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
import { mapState, mapMutations } from 'vuex'
import { BASE_VALUE_REDRAW_CARD } from '../geme'

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
    play () {
      this.$store.commit('drawing', {'people': 'banker', 'seq': 'card1'})
      this.$store.commit('drawing', {'people': 'banker', 'seq': 'card2'})
      this.$store.commit('drawing', {'people': 'player', 'seq': 'card1'})
      this.$store.commit('drawing', {'people': 'player', 'seq': 'card2'})

      if (this.$store.getters.playerSum <= BASE_VALUE_REDRAW_CARD) {
        this.showModal()
      } else {
        this.hideModal()
      }
    }
  }
}
</script>

<style>
.card-field {
  display: flex;
}
</style>
