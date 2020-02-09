<template>
  <div>
    <modal name="result-modal" :draggable="true" :resizable="true">
      <div class="modal-header">
        <h2>ゲーム結果</h2>
      </div>
      <div class="modal-body">
        <p>プレイヤーの点数：{{ this.$store.getters.playerSum }}</p>
        <button v-on:click="hideModal">閉じる</button>
      </div>
    </modal>
    <div id="game-panel">
      <game-board
        id="game-board-area"
        :show-modal="showModal"
        :hide-modal="hideModal"
      />
      <div id="ruled-line-panel"></div>
      <game-state id="info-panel"></game-state>
    </div>
  </div>
</template>

<script>
import GameBoard from './components/GameBoard'
import GameState from './components/GameState'

export default {
  components: {
    GameBoard,
    GameState
  },
  methods: {
    showModal: function () {
      this.$modal.show('result-modal')
    },
    hideModal: function () {
      this.$modal.hide('result-modal')
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
