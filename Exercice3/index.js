function calculateAverage(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        return "No numbers to calculate average";
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    let average = sum / numbers.length;
    return average;
}

console.log(calculateAverage([5, 10, 15])); // retourne 10
console.log(calculateAverage([10, 20, 30, 20])); // retourne 20
console.log(calculateAverage([])); // No numbers to calculate average