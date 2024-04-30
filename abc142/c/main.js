function Main(input) {
    input = input.split("\n");
    /**
     * 生徒の登校した順番を求める。
     * Aには出席番号順でその人が登校したタイミングで
     * 教室にその人を合わせて何人いたか記録している。
     * つまり、配列のキーに出席番号を振って、配列の値を
     * 昇順ソートすれば登校した順番を求められる。
     */
    const n = Number(input.shift());
    const a = input.shift().split(' ').map(Number);
    // 配列に出席番号を振る
    const entries = Object.entries({...a}).map((item) => ({ ...item, 0: Number(item[0]) + 1 }));;
    entries.sort((a, b) => a[1] - b[1]);

    const order = entries.map((item) => item[0]);
    
    console.log(order.join(' '));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
