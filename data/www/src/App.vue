<template>
  <div>
    <modal name="indicate-winner-modal"
      :draggable="true">
      <div class="modal-header">
        <h2>ゲーム結果</h2>
      </div>
      <div class="modal-body">
        <p>プレイヤーの点数：{{ this.$store.getters.playerSum }}</p>
        <p v-if="shouldDraw3rdCard()">追加のカードを引きます</p>
        <button @click="extraPlayNecessary()">OK</button>
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
        <button v-on:click="hideModal">OK</button>
      </div>
    </modal>
    <div id="game-panel"
      @closed="closeAction">
      <game-board id="game-board-area" :on-click-play-button="onClickPlayButton"/>
      <ruled-line id="ruled-line-panel" :game-results="this.winners"/>
      <game-state id="info-panel"></game-state>
      <bet-controller id="bet-controller" />
    </div>
  </div>
</template>

<script>
import GameBoard from './components/GameBoard'
import GameState from './components/GameState'
import RuledLine from './components/RuledLine'
import BetController from './components/BetController'

import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

import { BASE_VALUE_REDRAW_CARD, judgeTheWinner, DECK_NUM_MIN } from './geme'

// <modal name="" の値を一覧化する
const modalName = {
  initDeckModal: 'init-deck-modal',
  indicateWinnerModal: 'indicate-winner-modal'
}

export default {
  components: {
    GameBoard,
    GameState,
    RuledLine,
    BetController
  },
  data: function () {
    return {
      deckNumMin: DECK_NUM_MIN
    }
  },
  computed: {
    ...mapGetters([
      'playerSum',
      'bankerSum',
      'countDeck'
    ]),
    ...mapState([
      'player',
      'banker',
      'winners'
    ])
  },
  methods: {
    async showModal (modalNameArg) {
      this.$modal.show(modalNameArg)
    },
    hideModal: function (modalNameArg) {
      return new Promise(resolve => {
        this.$modal.hide(modalNameArg)
        return modalNameArg
      })
    },
    closeAction: function (modalNameArg) {
      if (modalNameArg === modalName.indicateWinnerModal) {
        this.extraPlay()
      } else if (modalNameArg === modalName.initDeckModal) {
        this.initDeck()
      }
    },
    ...mapMutations([
      'pushWinner',
      'drawing'
    ]),
    ...mapActions([
      'play',
      'extraPlay'
    ]),
    ...mapMutations([
      'initDeck',
      'initGroundCards'
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
    shouldDraw3rdCard () {
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
    async onClickPlayButton () {
      this.initGroundCards()
      this.play()
      this.showModal(modalName.indicateWinnerModal)
    },
    async extraPlayNecessary () {
      this.hideModal(modalName.indicateWinnerModal)
      if (this.shouldDraw3rdCard()) {
        this.extraPlay()
        this.showModal(modalName.indicateWinnerModal)
      } else {
        this.recordWinner()
      }
    },
    recordWinner () {
      let payload = {'winner': judgeTheWinner(this.playerSum, this.bankerSum)}
      this.pushWinner(payload)
      if (this.countDeck <= DECK_NUM_MIN) {
        this.showModal(modalName.initDeckModal)
      }
    }
  }
}
</script>

<style>
#game-panel {
  display: grid;
  grid-template-areas:
    'game-board-area ruled-line-area'
    'bet-controller-area info-area';
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

#bet-controller {
  grid-area: bet-controller-area;
}

.modal-header, .modal-body {
  padding: 5px 25px;
}
.modal-header {
  border-bottom: 1px solid #ddd;
}
</style>
