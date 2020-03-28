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

import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

import { BASE_VALUE_REDRAW_CARD, judgeTheWinner, DECK_NUM_MIN } from '../geme'

export default {
  name: 'game-board',
  props: {
    showInitDeckModal: {
      type: Function,
      required: true
    }
  },
  computed: {
    ...mapGetters([
      'playerSum',
      'bankerSum',
      'countDeck'
    ]),
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
      'pushWinner',
      'drawing',
      'initGroundCards'
    ]),
    ...mapActions([
      'play',
      'extraPlay'
    ]),
    isDrawnCard3: function (card3) {
      if (card3 === null) {
        return false
      } else if (card3 === undefined) {
        return false
      } else {
        return true
      }
    },
    shouldDraw3rdCard: function () {
      if (
        this.playerSum < BASE_VALUE_REDRAW_CARD &&
        !this.isDrawnCard3(this.player.card3) &&
        this.player.card1 !== undefined &&
        this.banker.card1 !== undefined
      ) {
        return true
      }
      return false
    },
    onClickPlayButton: function () {
      this.initGroundCards()
      this.play()
      if (this.shouldDraw3rdCard()) {
        this.extraPlay()
      }

      let payload = {'winner': judgeTheWinner(this.playerSum, this.bankerSum)}
      this.pushWinner(payload)

      if (this.countDeck <= DECK_NUM_MIN) {
        this.showInitDeckModal()
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
