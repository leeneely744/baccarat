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
      squareClasses: {}
    }
  },
  computed: {
    getSquareClass: function () {
      // こうしないと引数が渡せない
      return function (row, column) {
        // rowもcolumnも1から始まっているため
        row--
        column--
        // calcSquareClasses()で予め保存しておいたdataにアクセスする
        // もし排列要素がなければ''を返す。
        let targetIndex = this.getSquareClassIndexFormat(row, column)
        if (this.squareClasses === undefined) {
          return ''
        }
        if (this.squareClasses[targetIndex] === undefined) {
          return ''
        }
        return this.squareClasses[targetIndex]
      }
    }
  },
  methods: {
    calcSquareClasses: function () {
      let rightShiftCount = 0
      let index = 0
      let preResult = 'draw'
      this.gameResults.forEach(result => {
        if (preResult !== result && preResult !== 'draw' && result !== 'draw') {
          rightShiftCount++
          index = 0
        }
        index++
        preResult = result
      })
      // indexは一つ余計に進んでいるので戻す
      let targetIndex = this.getSquareClassIndexFormat(rightShiftCount, index - 1)
      return {'index': targetIndex, 'value': preResult}
    },
    getSquareClassIndexFormat: function (shift, index) {
      return shift.toString() + '-' + index.toString()
    }
  },
  watch: {
    gameResults: function () {
      let res = this.calcSquareClasses()
      this.$set(this.squareClasses, res.index, res.value)
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

.banker::before {
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

.player::before {
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

.draw::before {
  content: '';
  border: solid 1px #00c92c;
  position: absolute;
  height: 13px;
  left: 40%;
  transform: rotate(45deg)

}
</style>
