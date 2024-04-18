function Main(input) {
    input = input.split("\n");
    n = Number(input[0])
    x = input[1].split(" ").map(Number);

    p = coordinate(x, n)

    energy = lossTotal(p, x)
    console.log(energy);
}

function coordinate(x, n) {
    const avgX = x.reduce((a, b) => a + b, 0) / n
    return Math.round(avgX)
}

function lossTotal(p, x) {
    return x.reduce((a, b) => a + Math.abs((b - p)) ** 2, 0)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
