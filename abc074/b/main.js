function Main(input) {
    input = input.split("\n");
    // 入力
    const N = Number(input.shift());
    const K = Number(input.shift());
    const x = input.shift().split(' ').map(Number);

    // 移動距離の計算
    // ロボットA or Bの近いほうの移動距離を加算
    const totalDistance = x.reduce((total, position) => {
        const distance = Math.min(position * 2, (K - position) * 2);
        return total + distance;
    }, 0);

    console.log(totalDistance);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
