<template>
  <div>
    <modal name="indicate-winner-modal"
      :draggable="true"
      @closed="closeAction('indicate-winner-modal')">
      <div class="modal-header">
        <h2>ゲーム結果</h2>
      </div>
      <div class="modal-body">
        <p>プレイヤーの点数：{{ this.$store.getters.playerSum }}</p>
        <p>追加のカードを引きます</p>
        <button v-on:click="hideResultModal">OK</button>
      </div>
    </modal>
    <modal name="init-deck-modal"
      :draggable="true"
      @closed="closeAction('init-deck-modal')">
      <div class="modal-header">
        <h2>お知らせ</h2>
      </div>
      <div class="modal-body">
        <p>山札が6枚以下になったので、山札を初期化します</p>
        <button v-on:click="hideInitModal">OK</button>
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

// <modal name="" の値を一覧化する
const modalName = {
  initDeckModal: 'init-deck-modal',
  indicateWinnerModal: 'indicate-winner-modal'
}

export default {
  components: {
    GameBoard,
    GameState,
    RuledLine
  },
  computed: {
    ...mapGetters([
      'playerSum',
      'bankerSum',
      'countDeck'
    ]),
    ...mapState([
      'player',
      'banker'
    ])
  },
  methods: {
    showModal: function (modalNameArg) {
      this.$modal.show(modalNameArg)
    },
    hideModal: function (modalNameArg) {
      this.$modal.hide(modalNameArg)
    },
    hideResultModal: function () {
      this.$modal.hide(modalName.indicateWinnerModal)
    },
    hideInitModal: function () {
      this.$modal.hide(modalName.initDeckModal)
    },
    closeAction: function (modalNameArg) {
      if (modalNameArg === modalName.indicateWinnerModal) {
        this.extraPlay()
      } else if (modalNameArg === modalName.initDeckModal) {
        this.initDeck()
      }
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
      'pushWinner',
      'initDeck'
    ]),
    ...mapActions([
      'extraPlay'
    ]),
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
    }
  },
  updated: function () {
    if (this.shouldDraw3rdCard() === true) {
      this.showModal(modalName.indicateWinnerModal)
    } else {
      let payload = {'winner': judgeTheWinner(this.playerSum, this.bankerSum)}
      this.pushWinner(payload)
    }

    if (this.countDeck <= 6) {
      this.showModal(modalName.initDeckModal)
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
