function Main(input) {
    input = input.split("\n");
    passChars = input[0].split('');
    output = passwordStrength(passChars);
    console.log(output);
}

function passwordStrength(pass) {
    passNumbers = pass.map(Number);

    isOnlySameCharacter = passNumbers.every((val, i, arr) => val === arr[0]);
    if (isOnlySameCharacter) {
        return 'Weak';
    }

    isConsecutive = passNumbers.every((val, i, arr) => {
        if (arr.length <= i + 1) {
            return true;
        }

        const nextVal = arr[i + 1];
        return val === nextVal - 1 || val === 9 && nextVal === 0;
    });
    if (isConsecutive) {
        return 'Weak';
    }

    return 'Strong';
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
