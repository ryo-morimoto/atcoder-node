function Main(input) {
    input = input.split("\n");
    const [h, w] = input.shift().split(' ').map(Number);

    let canReachMathCount = Math.ceil(h * w / 2);

    if (h < 2 || w < 2) {
        canReachMathCount = 1;   
    }

    console.log(canReachMathCount);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
