function Main(input) {
    input = input.split("\n");
    /* インプットを受け取る */
    // カード
    const tmp = input.splice(0, 3);
    const card = tmp.map(item => item.split(' ').map(Number));

    // 選ばれた数字の個数
    const selectCount = Number(input.shift());

    // カードの穴が空いているか
    const punched = [...Array(3)].map(_ => Array(3).fill(false));
    for (let i = 0; i < selectCount; i++) {
        let b = Number(input.shift());
        for (let y = 0; y < 3; y++) {
            for (let x = 0; x < 3; x++) {
                if (card[y][x] === b) punched[y][x] = true;
            }
        }
    }

    /* ビンゴの判定 */
    let bingo = false;
    
    // 横
    for (let y = 0; y < 3; y++) {
        let count = 0;
        for (let x = 0; x < 3; x++) {
            if (punched[x][y]) count++;
        }
        if (count === 3) bingo = true;
    }
    
    // 縦
    for (let x = 0; x < 3; x++) {
        let count = 0;
        for (let y = 0; y < 3; y++) {
            if (punched[x][y]) count++; 
        }
        if (count === 3) bingo = true;
    }

    // 斜め
    if (punched[0][0] &&punched[1][1] &&punched[2][2]) bingo = true;
    if (punched[0][2] &&punched[1][1] &&punched[2][0]) bingo = true;

    console.log(bingo ? 'Yes' : 'No');
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
