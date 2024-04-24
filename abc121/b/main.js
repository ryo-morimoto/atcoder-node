function Main(input) {
    input = input.split("\n");
    const [n, m, c] = input.shift().split(' ').map(e => +e);
    const b = input.shift().split(' ').map(e => +e);
    const a = input.map(e => e.split(' ').map(e => +e));

    let correctAnswerCnt = 0;
    for (let i = 0; i < n; i++) {
        let sum = c;
        for (let j = 0; j < m; j++) {
            sum += a[i][j] * b[j];
        }

        if (sum > 0) {
            correctAnswerCnt++;
        }
    }
    console.log(correctAnswerCnt);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
