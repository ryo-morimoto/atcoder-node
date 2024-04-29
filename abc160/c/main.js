function Main(input) {
    input = input.split("\n");
    /**
     * [変数]
     * Kメートルの円形の湖
     * N軒の家
     * i番目の家は湖の北端から時計回りにA_iメートルの位置
     * 
     * [要件]
     * N軒すべての家を訪ねるための最短移動距離を求める
     * 自分の家に戻ってくる必要はない、すべての家を周る必要がある。
     * →左右どちらかのとなりの家までの距離が一番遠い家を探し、その家をスタートにして近い家の方に周っていく
     * 
     * [制約]
     * 不自然な点はない。計算量を無視した実装をすると実行時間制限にかかりそう。
     * 
     * [処理]
     * 左右どちらかの隣の家までの距離が一番遠い家を探す。
     * 遠いほうの家までの距離を1周からマイナスした値が最短移動距離
     */

    // 入力
    const [k, n] = input.shift().split(' ').map(Number);
    const a = input.shift().split(' ').map(Number);

    // 隣の家までの距離を計算する。
    const house = a.map((val, i, houses) => {
        let neighbor = i + 1;
        if (neighbor < houses.length) {
            return houses[neighbor] - val;
        } else {
            return houses[0] + (k - val);
        }
    });

    // 一番大きい隣の家までの距離を求める
    const distance = Math.max(...house)

    // 1周から隣の家までの距離をマイナス
    const travel = k - distance; 
    console.log(travel);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
