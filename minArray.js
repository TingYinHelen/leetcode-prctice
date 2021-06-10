/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    let low = 0;
    let high = numbers.length - 1;

    while (low < high) {
        let index = low + Math.floor((high - low) / 2);
        if (numbers[index] < numbers[high]) {
            high = index;
        } else if (numbers[index] > numbers[high]) {
            low = index + 1;
        } else {
            high--;
        }
    }
};


