function Main(input) {
    input = input.split("\n");
    const grams = input[0].split(' ');
    const gold = !!Number(grams[0]);
    const silver = !!Number(grams[1]);

    /**
     * gold silver
     * 0 0 # pattern nothing
     * 0 1 -> silver
     * 1 0 -> gold
     * 1 1 -> alloy
     */
    let generatedMetal = 'Alloy';
    if (!gold && silver) generatedMetal = 'Silver';
    if (gold && !silver) generatedMetal = 'Gold'

    console.log(generatedMetal);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
