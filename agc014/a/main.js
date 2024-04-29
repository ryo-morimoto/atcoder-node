function Main(input) {
    input = input.split("\n");
    /**
     * クッキーA, B, C
     * 3人は同時に、各々が持っているクッキーを半分ずつに分けて残りの二人にそれぞれを渡す
     * 誰かのクッキーの個数が奇数個になるまで続ける。
     * 全員の持ち数がすべて同じ個数の場合は無限に行われるのでエラー
     */

    // 入力
    const [a, b, c] = input.shift().split(' ').map(Number);

    const result = cookieGame(a, b, c);

    console.log(result);
}

function cookieGame(a, b, c) {
    if (a === b && b === c) {
        // すべての個数が同じで、偶数の場合無限に実行されるのでキック
        return a % 2 ? 0 : -1;
    }

    let count = 0;
    while (a % 2 == 0 && b % 2 == 0 && c % 2 == 0) {
        const halfA = Math.floor(a / 2);
        const halfB = Math.floor(b / 2);
        const halfC = Math.floor(c / 2);
        
        a = halfB + halfC;
        b = halfA + halfC;
        c = halfA + halfB;

        count++
    }

    return count;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
