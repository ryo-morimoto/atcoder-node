function Main(input) {
    input = input.split("\n");
    const taxRate = 1.08;
    n = Number(input[0])
    x = n / taxRate;
    xFloor = Math.floor(x);
    xCeil = Math.ceil(x)

    output = ":("
    if (Math.floor(xFloor * taxRate) === n) {
        output = xFloor
    }
    if (Math.floor(xCeil * taxRate) === n) {
        output = xCeil
    }
    console.log(output);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
