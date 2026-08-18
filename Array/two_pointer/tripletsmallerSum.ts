// Triplet Sum Less Than Target .
// Given an array of unsorted numbers and a target sum, count all triplets in it such that the sum of the triplet is less than the target sum.
// example -> Input: [-1, 0, 2, 3], target=3
// Output: 2
// Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3] and [-1, 2, 3]


function tripletSmallerSum (nums: number[], target: number) : number {
    let newNums = [...nums].sort((a, b) => a - b);
    let n = newNums.length;
    let count = 0;

    for (let i = 0; i < n - 2; i++) {
        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            let sum = newNums[i] + newNums[left] + newNums[right];
            if (sum < target) {
                count = count + (right - left); // here all right - left elements will be less than target sum because the array is sorted .
                left ++;
            } else {
                right --;
            }
        }
    }
    return count;
}

const inputSum = [-1, 0, 2, 3]; 
let target = 3;

console.log(tripletSmallerSum(inputSum, target));