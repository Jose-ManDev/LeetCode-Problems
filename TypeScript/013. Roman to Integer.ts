let romanValues: Record<string, number> = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
};

function romanToInt(romanNumber: string): number {
    let total = 0;
    let i = 0;
    while ( i < romanNumber.length) {
        if (romanValues[romanNumber[i]] < romanValues[romanNumber[i + 1]]) {
            total += romanValues[romanNumber[i + 1]] - romanValues[romanNumber[i]];
            i += 2;
        } else {
            total += romanValues[romanNumber[i]];
            i++;
        }
    }

    return total;
}

console.log(romanToInt('XLIII'));