function Main(input) {
    input = input.split("\n");
    /**
     * - N枚のカード
     * - カードの数字はa_i
     * - AとBでカードを一枚ずつ取っていく、Aが先攻（取るカードは数の大きいものを優先する）
     * - A - Bの値を求める
     */

    // 入力
    const cards = {
        total : Number(input.shift()),
        card : input.shift().split(' ').map(Number)
    };

    // AとBが数の大きいカードを一枚ずつ取っていく
    let alice = 0;
    let bob = 0;

    // カードを降順にソート
    cards.card.sort((a, b) => b - a);

    // カードをとる
    cards.card.map((val, i) => {
        let count = i + 1;
        if (count % 2 === 1) {
            alice += val;
        } else {
            bob += val;
        }
    })


    // AがBより何点多いか求める
    const pointDiff = alice - bob
    console.log(pointDiff);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
