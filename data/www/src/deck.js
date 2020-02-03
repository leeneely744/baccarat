// カードデッキに関する設定などを書く

/**
 * 渡されたデッキから、任意の枚数のカードを引く
 * @param {引く対象のデッキ} deck Object
 * @returns {{'絵柄': '数字'}, カードを引いた後のデッキ}
 */
export let drawCardFromDeck = (deck = {}) => {
  let keys = Object.keys(deck)
  let keysNum = keys.length()

  if (keysNum === 0) { return null }

  let targetPic = keys[Math.floor(Math.random() * Math.floor(keysNum))]
  let cards = Object.keys(deck[targetPic])
  let drawedNum = cards.length()
  let targetCardNum = cards[Math.floor(Math.random() * Math.floor(drawedNum))]

  let result = {
    'cardNum': targetCardNum,
    'picture': targetPic
  }
  delete deck[targetPic][targetCardNum]

  // もし特定の絵柄に属するカードが全てなくなったら、絵柄を削除する
  if (Object.keys(deck[targetPic]).length() === 0) {
    delete deck[targetPic]
  }

  return {result, deck}
}

// 絵柄一つ分のカード束
// falseだと「まだ引かれてない」を表す
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

// デッキの初期状態
export let deckInit = {
  'club': cards,
  'diamond': cards,
  'heart': cards,
  'spade': cards
}
