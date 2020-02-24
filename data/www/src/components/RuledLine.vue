<template>
  <div>
    <div id='ruled-line-base'>
      <div v-for="x in width" :key=x>
        <div v-for="y in height" :key=y>
          <div class="square"/>
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
  data: function () {
    return {
      width: RULED_LINE_WIDTH,
      height: RULED_LINE_HEIGHT
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
</style>
