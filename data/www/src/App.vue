<template>
  <div id="game-panel">
    <game-board id="game-board-area"></game-board>
    <div id="ruled-line-panel"></div>
    <game-state id="info-panel"></game-state>
  </div>
</template>

<script>
import GameBoard from './components/GameBoard'
import GameState from './components/GameState'
import VModal from 'vue-js-modal'

export default {
  components: {
    GameBoard,
    GameState
  },
  methods: {
    show: function () {
      this.$modal.show('hello-world')
    },
    hide: function () {
      this.$modal.hide('hello-world')
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
</style>
