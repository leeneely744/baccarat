// チップに関する各種設定などを記述するファイル

import _ from 'lodash'

// チップの種類
export let tipTypes = {
  '1000': 1000,
  '5000': 5000,
  '10000': 10000
}

/**
 * 所持チップの初期stateとして、store.tipに代入する
 * tip: {
 *    tip1000: 0,
 *    tip5000: 0
 *    ...
 *  }
 */
export let tipState = _.forEach(tipTypes, (value, key) => [`tip${key}`, 0])
