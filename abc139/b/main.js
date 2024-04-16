function Main(input) {
    line = input.split("\n");
    args = line[0].split(' ');
    powerStripSocket = Number(args[0]);
    requiredSocket = Number(args[1]);

    powerStrip = calculatePowerStrip(powerStripSocket, requiredSocket);

    console.log(powerStrip);
}

function calculatePowerStrip(powerStripSocket, requiredSocket) {
    socket = 1;
    powerStrip = 0;

    if (requiredSocket === 1) {
        return 0;
    }

    while (requiredSocket > socket) {
        socket--;
        powerStrip++;
        socket += powerStripSocket;
    }

    return powerStrip;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
