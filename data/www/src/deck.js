// カードデッキに関する設定などを書く

import _ from 'lodash'

/**
 * デッキを初期化する関数
 */
export let initDeck = (deck) => {
  return _.forEach(deck, function (pic) {
    pic.fill(false)
  })
}

// 絵柄一つ分のカード束
const cards = {
  '1': false,
  '2': false,
  '3': false,
  '4': false,
  '5': false,
  '6': false,
  '7': false,
  '8': false,
  '9': false,
  '10': false,
  '11': false,
  '12': false,
  '13': false
}

/**
 * デッキ
 * falseだと「まだ引かれてない」を表す
 */
export let deck = {
  'club': cards,
  'diamond': cards,
  'heart': cards,
  'spade': cards
}
