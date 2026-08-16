// Square of a Sorted Array.
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// MY Approach -> first loop over the array and square each element, then sort the array and return it. TC: O(n log n) SC: O(n)

// let nums = [-4, -1, 0, 3, 10];

// function sortedSquares(nums: number[]): number[] {
//   let newSquare = nums.map((num) => num ** 2);
//   return newSquare.sort((a, b) => a - b);
// }

// console.log(sortedSquares(nums)); // Output: [0, 1, 9, 16, 100]

// // TC: O(n log n) due to the sorting step, where n is the length of the input array.
// // SC: O(n) for storing the squared values in a new array.

// ++++++++++++++++++ Follow-up O(n) solution using two pointers ++++++++++++++++++

// let nums = [-4, -1, 0, 3, 10];

// function sortedSquares(nums: number[]): number[] {
//   let res: number[] = new Array(nums.length);
//   let positiveNumber = [];
//   let negativeNumber = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < 0) {
//       let negativeRes = nums[i] ** 2;
//       negativeNumber.push(negativeRes);
//     } else {
//       let positiveRes = nums[i] ** 2;
//       positiveNumber.push(positiveRes);
//     }
//   }

//   let n = negativeNumber.length;
//   let m = positiveNumber.length;

//   let i = n - 1; // pointer for negativeNumber
//   let j = 0; // pointer for positiveNumber
//   let k = 0; // pointer for res

//   while (i >= 0 && j < m) {
//     if (negativeNumber[i] < positiveNumber[j]) {
//       res[k] = negativeNumber[i];
//       k++;
//       i--;
//     } else {
//       res[k] = positiveNumber[j];
//       k++;
//       j++;
//     }
//   }

//   // edge case when i pointer is reached negative.length
//   while (i >= 0) {
//     res[k] = negativeNumber[i];
//     k++;
//     i--;
//   }

//   // edge case when j poionter reached positive.length;
//   while (j < m){
//     res[k] = positiveNumber[j];
//     k++;
//     j++;
//   }

//   return res;
// }

// const res = sortedSquares(nums);
// console.log(res);

// TC: O(n) where n is the length of the input array.
// SC: O(n) for storing the squared values in a new array.

//+++++++++ more optimized way is to use two pointers +++++++++++

let nums = [-89,-8,-4, -1, 0, 3, 10,40,49];
 
function sortedSquares(nums: number[]): number[] {
  let res: number[] = Array.from({ length: nums.length });
  let k = res.length - 1;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let leftSquare = nums[left] ** 2;
    let rightSquare = nums[right] ** 2;

    if (leftSquare > rightSquare) {
      res[k] = leftSquare;
      k--;
      left++;
    }else {
      res[k] = rightSquare;
      k--;
      right--;
    }
  }

  return res;
}

const res = sortedSquares(nums);
console.log(res);

// TC: O(n) where n is the length of the input array.
// SC: O(n) for storing the squared values in a new array.
