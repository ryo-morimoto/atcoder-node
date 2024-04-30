function Main(input) {
    input = input.split("\n");
    /**
     * N個の競技プログラミング用の問題に難易度dが設定されているが。
     * 難易度Kを基準として2つに分けたときに問題数が同数になるKの選び方
     * 
     * [制約]
     * - Nは偶数（問題の数は偶数）
     * 
     * [処理の流れ]
     * ソートして、配列の真ん中の値二つを取る。
     * 二つの値が同じであれば、同数になるKの選び方はない。
     * 二つの値が違うのであれば、大きい方から小さい方を引いた数がKの選び方の数になる。
     */
    const n = Number(input.shift())
    const d = input.shift().split(' ').map(Number);

    const ans = choices(n, d);

    console.log(ans);
}

function choices(n, d) {
    d.sort((a, b) => a - b);
    const halfN = n / 2;
    if (d[halfN] === d[halfN - 1]) {
        return 0;
    }

    return d[halfN] - d[halfN - 1];
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
