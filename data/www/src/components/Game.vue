<template lang='pug'>
  div#game-panel
    game-board#game-board-area
    div#ruled-line-panel This is ruled line area.
    game-state#info-panel
</template>

<script>
import GameBoard from './GameBoard'
import GameState from './GameState'

export default {
  components: {
    GameBoard,
    GameState,
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
