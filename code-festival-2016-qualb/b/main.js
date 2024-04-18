function Main(input) {
    input = input.split("\n");
    line = input[0].split(' ');
    N = Number(line[0]);
    A = Number(line[1]);
    B = Number(line[2]);
    S = input[1].split('');

    const max = A + B
    let fix = {
        count: 0,
        internal: 0,
        oversea: 0,
    }
    output = S.map((val, i, arr) => {
        if (val === 'c') {
            return 'No';
        }

        let result = 'No';
        if (val === 'a' && fix.count < max) {
            fix.count++;
            fix.internal++;

            result = 'Yes';
        }

        if (val === 'b' && fix.count < max && fix.oversea < B) {
            fix.count++;
            fix.oversea++;

            result = 'Yes';
        }

        return result;
    })

    output.map((val) => console.log(val));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
