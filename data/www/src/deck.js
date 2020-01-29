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

/**
 * デッキ
 * falseだと「まだ引かれてない」を表す
 */
export let deck = {
  'club': {
    '0': false,
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
    '12': false
  },
  'diamond': {
    '0': false,
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
    '12': false
  },
  'heart': {
    '0': false,
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
    '12': false
  },
  'spade': {
    '0': false,
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
    '12': false
  }
}
