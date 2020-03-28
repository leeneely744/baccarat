// チップに関する各種設定などを記述するファイル

import _ from 'lodash'

// チップの種類
export let tipTypes = {
  '1000': 0,
  '5000': 0,
  '10000': 0
}

/**
 * 所持チップの初期stateとして、store.tipに代入する
 * tip: {
 *    1000: 0,
 *    5000: 0
 *    ...
 *  }
 */
export let havingTips = _.mapKeys(tipTypes, (value, key) => `${key}`)

// かけているチップの記録
export let bettingTips = _.mapKeys(tipTypes, (value, key) => `${key}`)
