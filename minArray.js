/**
 * @param {number[]} numbers
 * @return {number}
 */
// var minArray = function(numbers) {
//     let low = 0;
//     let high = numbers.length - 1;

//     while (low < high) {
//         let index = low + Math.floor((high - low) / 2);
//         if (numbers[index] < numbers[high]) {
//             high = index;
//         } else if (numbers[index] > numbers[high]) {
//             low = index + 1;
//         } else {
//             high--;
//         }
//     }
// };
var minArray = function(numbers) {
    let i = 0;
    let tmp = numbers[i];
    while (tmp <= numbers[i]) {
        tmp = numbers[i];
        console.log('i====', i)
        console.log('tmp====', tmp)
        i++;
    }
    return numbers[i] === undefined ? numbers[i] : numbers[0];
}
var minArray = function(numbers) {
    let i = 0, 
        j = numbers.length - 1;
    function find() {
        m = Math.floor((j + i)/2);
        if (i === j) {
            return numbers[i];
        } 
        if (numbers[m] === numbers[j]) {
            j--;
            return find();
        }
        if (numbers[m] > numbers[j]) {
            i = m + 1;
            return find();
        }
        if (numbers[m] < numbers[j]) {
            j = m;
            return find();
        }
    }
    return find();
}
console.log(minArray([1,1]))


