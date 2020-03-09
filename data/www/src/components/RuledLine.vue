<template>
  <div>
    <div id='ruled-line-base'>
      <div v-for="x in width" :key=x>
        <div v-for="y in height" :key=y>
          <div class="square" v-bind:class="getSquareClass(x, y)"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const RULED_LINE_WIDTH = 25
const RULED_LINE_HEIGHT = 16

export default {
  name: 'ruled-line',
  props: {
    gameResults: {
      type: Array,
      required: true
    }
  },
  data: function () {
    return {
      width: RULED_LINE_WIDTH,
      height: RULED_LINE_HEIGHT,
      squareClasses: []
    }
  },
  computed: {
    getSquareClass: function () {
      // こうしないと引数が渡せない
      return function (row, column) {
        // initSquareClasses()で予め保存しておいた2次元配列のdataにアクセスする
        // もし排列要素がなければ''を返す。
        if (this.$data.squareClasses[column] === undefined) {
          return ''
        }
        if (this.$data.squareClasses[column][row] === undefined) {
          return ''
        }
        return this.$data.squareClasses[column][row]
      }
    }
  },
  methods: {
    initSquareClasses: function () {
      let rightShiftCount = 0
      let index = 0
      let classArray = new Array(RULED_LINE_WIDTH)
      let tmpColum = new Array(RULED_LINE_HEIGHT)
      let preResult = 'draw'
      this.gameResults.forEach(result => {
        if (rightShiftCount > 0 && preResult !== result && preResult !== 'draw') {
          rightShiftCount++
        }

        tmpColum[index] = result
        index++
        if (result === 'draw') {
          index = 0
          rightShiftCount++
        }
        classArray[rightShiftCount] = tmpColum

        preResult = result
      })
      return classArray
    }
  },
  watch: {
    gameResults: function () {
      this.$data.squareClasses = this.initSquareClasses()
    }
  }
}
</script>

<style>
/*
 borderとpaddingをボックスサイズ（widhtとheight）の中に含めて
 算出してくれるようになるので、スタイリングがしやすくなる。
*/
* {
  box-sizing: border-box;
}

#ruled-line-base {
  background-color: #c0c0c0;
  width: calc(202px / RULED_LINE_WIDTH);
  height: calc(202px / RULED_LINE_HEIGHT);
  display: flex;
  flex-wrap: wrap;
  border: solid 1px #333;
}

.square {
  background-color: #ffffff;
  position: relative;
  width: 16px;
  height: 16px;
  border: solid 1px #333;
}

.banker-mark::before {
  content: '';
  width: 11px;
  height: 11px;
  border: solid 1px #ff0000;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.player-mark::before {
  content: '';
  width: 11px;
  height: 11px;
  border: solid 1px #4169e1;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.draw-mark::before {
  content: '';
  border: solid 1px #00c92c;
  position: absolute;
  height: 13px;
  left: 40%;
  transform: rotate(45deg)

}
</style>
