function Main(input) {
    input = input.split("\n");
    /**
     * - 偶数
     * - 正整数 N
     * - N以下で2で割り切れる一番大きい数を求める
     */
    const n = Number(input.shift());

    // N以下の偶数の配列を生成する
    const evenNumbers = [];
    for (let i = 0; 2 ** i <= n; i++) {
        evenNumbers.push(2 ** i);
    }

    // 降順で並び替える
    evenNumbers.sort((a, b) => b - a);

    console.log(evenNumbers[0]);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
