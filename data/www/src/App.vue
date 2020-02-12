<template>
  <div>
    <modal name="result-modal"
      :draggable="true"
      @closed="closeAction">
      <div class="modal-header">
        <h2>ゲーム結果</h2>
      </div>
      <div class="modal-body">
        <p>プレイヤーの点数：{{ this.$store.getters.playerSum }}</p>
        <p>追加のカードを引きます</p>
        <button v-on:click="hideModal">OK</button>
      </div>
    </modal>
    <div id="game-panel"
      @closed="closeAction">
      <game-board id="game-board-area"/>
      <ruled-line id="ruled-line-panel" />
      <game-state id="info-panel"></game-state>
    </div>
  </div>
</template>

<script>
import GameBoard from './components/GameBoard'
import GameState from './components/GameState'
import RuledLine from './components/RuledLine'

import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import { BASE_VALUE_REDRAW_CARD, judgeTheWinner } from './geme'

export default {
  components: {
    GameBoard,
    GameState,
    RuledLine
  },
  computed: {
    ...mapGetters([
      'playerSum',
      'bankerSum'
    ]),
    ...mapState([
      'player'
    ])
  },
  methods: {
    showModal: function () {
      this.$modal.show('result-modal')
    },
    hideModal: function () {
      this.$modal.hide('result-modal')
    },
    closeAction: function () {
      this.extraPlay()
    },
    isDrawnCard3: function (card3) {
      if (card3 === null) {
        return false
      } else if (card3 === undefined) {
        return false
      } else {
        return true
      }
    },
    ...mapMutations([
      'pushWinner'
    ]),
    ...mapActions([
      'extraPlay'
    ])
  },
  updated: function () {
    if (this.playerSum < BASE_VALUE_REDRAW_CARD && !this.isDrawnCard3(this.player.card3)) {
      this.showModal()
    } else {
      let payload = {'winner': judgeTheWinner(this.playerSum, this.bankerSum)}
      this.pushWinner(payload)
    }
  }
}
</script>

<style>
#game-panel {
  display: grid;
  grid-template-areas:
    'game-board-area ruled-line-area'
    'game-board-area info-area';
}

#game-board-panel {
  grid-area: game-board-area;
  background-color: #95EC00;
}

#ruled-line-panel {
  grid-area: ruled-line-area;
  background-color: #B2F63D;
}

#info-panel {
  grid-area: info-area;
  background-color: #C4F66F;
}

.modal-header, .modal-body {
  padding: 5px 25px;
}
.modal-header {
  border-bottom: 1px solid #ddd;
}
</style>
