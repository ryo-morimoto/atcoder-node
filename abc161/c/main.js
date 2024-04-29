function Main(input) {
    input = input.split("\n");
    /**
     * Nの最小値を求める問題
     * x = ±(N - K)
     * x = ±(x - K)
     * N >= K / 2 の場合、Nを小さくできるので計算する。
     * KがNの公約数の場合、答えは0になりそう。。
     */
    // 入力
    const [n, k] = input.shift().split(' ').map(BigInt);
    const ans = calMin(n, k);
    console.log(ans.toString());
}

function calMin(n, k) {
    if (n === 0) {
        return 0;
    }
    const x = n % k;
    const t = k - x

    return x < t ? x : t;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
