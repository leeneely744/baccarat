// カードデッキに関する設定などを書く

/**
 * 渡されたデッキから、任意の枚数のカードを引く
 * @param {引く対象のデッキ} deck Object
 * @returns {'card': 引いたカードの名前, 'deck': カードを引いた後のデッキ}
 */
export let drawCardFromDeck = (deck = {}) => {
  let deckNum = deck.length

  if (deckNum === 0) { return null }

  // ランダム1枚引く
  let cardName = deck[Math.floor(Math.random() * Math.floor(deckNum))]

  // 引かれたカードはデッキから消す
  const newDeck = deck.filter(n => n !== cardName)
  console.log('cardName = ', cardName)

  return {'card': cardName, 'deck': newDeck}
}

// デッキの初期状態
// falseだと「まだ引かれてない」を表す
/**
 * デッキの初期状態
 * 引いたカードは配列から消していく
 * assetsのpngファイル名に依存しているので勝手に書き換えない
 * 
 * TODO: もっといい書き方があると思う
 */
export let deckInit = [
  'club_01',
  'club_02',
  'club_03',
  'club_04',
  'club_05',
  'club_06',
  'club_07',
  'club_08',
  'club_09',
  'club_10',
  'club_11',
  'club_12',
  'club_13',
  'diamond_01',
  'diamond_02',
  'diamond_03',
  'diamond_04',
  'diamond_05',
  'diamond_06',
  'diamond_07',
  'diamond_08',
  'diamond_09',
  'diamond_10',
  'diamond_11',
  'diamond_12',
  'diamond_13',
  'heart_01',
  'heart_02',
  'heart_03',
  'heart_04',
  'heart_05',
  'heart_06',
  'heart_07',
  'heart_08',
  'heart_09',
  'heart_10',
  'heart_11',
  'heart_12',
  'heart_13',
  'spade_01',
  'spade_02',
  'spade_03',
  'spade_04',
  'spade_05',
  'spade_06',
  'spade_07',
  'spade_08',
  'spade_09',
  'spade_10',
  'spade_11',
  'spade_12',
  'spade_13'
]
