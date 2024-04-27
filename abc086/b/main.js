function Main(input) {
    input = input.split("\n");
    // 入力
    const [a, b] = input[0].split(' ').map(Number); 
    // aをbより一桁上の数字としてbに加算
    const [_, bDigits] = b.toExponential().split('e')
    const x = a * Math.pow(10, Number(bDigits) + 1) + b;
    // 加算した結果の平方数かチェック
    const root = Math.sqrt(x);
    const isSquare = Number.isInteger(root);
    // 結果によってYes/Noを出力
    console.log(isSquare ? 'Yes' : 'No');
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
