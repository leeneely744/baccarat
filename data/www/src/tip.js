// チップに関する各種設定などを記述するファイル

import _ from 'lodash'
import { PARTICIPANTS } from './geme'

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

/**
 * かけているチップの状態
 * bettingTip: {
 *    'banker': {
 *        '1000': 0,
 *        '5000': 0,
 *        '10000': 0
 *     },
 *    'player': {
 *        （略）
 *    },
 *    （略）
 *  }
 */
let tipsPerResults = _.mapKeys(tipTypes, (value, key) => `${key}`)
export let bettingTips = _.mapValues(PARTICIPANTS, (value, key) => tipsPerResults)
