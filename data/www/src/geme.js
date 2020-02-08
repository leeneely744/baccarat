// プレイヤーの得点が5以下なら3枚目のカードが（バンカーも）引かれる。
export const BASE_VALUE_REDRAW_CARD = 5

// カード名から数字を取り出すメソッド
// 'club_03', 'spade_13'のような値を想定している
export let getCardNum = (cardName) => {
  if (cardName === null || cardName === undefined) {
    return 0
  }
  return parseInt(cardName.toString().substr(-2, 2))
}
