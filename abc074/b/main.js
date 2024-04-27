function Main(input) {
    input = input.split("\n");
    // 入力
    const N = Number(input.shift());
    const K = Number(input.shift());
    const x = input.shift().split(' ').map(Number);

    // 移動距離の計算
    const totalDistance = x.reduce((total, position) => {
        let distance = 0;
        // ボールの位置xが Kを半分にした数値よりも
        if (position < K / 2) {
            // 下の場合、0からxまでの距離を算出
            distance = position;
        } else {
            // 上の場合、Kからxまでの距離を算出
            distance = K - position;
        }
        // ロボットからボールまでの距離を2倍にして移動距離に加算
        return total + distance * 2;
    }, 0)

    console.log(totalDistance);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
