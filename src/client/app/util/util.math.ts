export function roundDecimal(number: number, decimal_places: number) {
    if (typeof number === 'number' && typeof decimal_places === 'number') {
        var denominator = Math.pow(10, decimal_places),
            rounded_number = Math.round(number * denominator) / denominator;

        return rounded_number;
    } else {
        return number;
    }
}

