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
        <p>山札が{{ deckNumMin }}枚以下になったので、山札を初期化します</p>
        <button v-on:click="hideInitModal">OK</button>
      </div>
    </modal>
    <div id="game-panel"
      @closed="closeAction">
      <game-board id="game-board-area" :show-init-deck-modal="showInitDeckModal"/>
      <ruled-line id="ruled-line-panel" :game-results="this.winners"/>
      <game-state id="info-panel"></game-state>
    </div>
  </div>
</template>

<script>
import GameBoard from './components/GameBoard'
import GameState from './components/GameState'
import RuledLine from './components/RuledLine'

import { mapState, mapGetters, mapMutations } from 'vuex'

import { DECK_NUM_MIN } from './geme'

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
  data: function () {
    return {
      deckNumMin: DECK_NUM_MIN
    }
  },
  computed: {
    ...mapGetters([
      'playerSum'
    ]),
    ...mapState([
      'player',
      'banker',
      'winners'
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
    ...mapMutations([
      'initDeck'
    ]),
    showInitDeckModal: function () {
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
