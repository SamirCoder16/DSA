// Two sum problem using two pointer technique
// two-pointer used when the array is sorted and you have to return the indices of the two numbers such that they add up to a specific target.

let nums = [11, 15, 2, 7, 13];
let target = 9;

// we have to return the numbers
// there for we use two pointer technique
// here if I return the indices of the numbers then I will have to sort the array and then return the indices of the numbers which
// will be wrong because the indices will change after sorting. So we will return the numbers instead of indices.

function twoSum(nums: number[], target: number): number[] | null {
  let left = 0;
  let right = nums.length - 1;

  // sort the array first
  let sortedNums = nums.sort((a, b) => a - b); // this will sort the array in numerical order not the lexicographical order

  while (left < right) {
    let sum = sortedNums[left] + sortedNums[right];

    if (sum === target) {
      return [sortedNums[left], sortedNums[right]];
    } else if (sum < target) {
      left++; // move the left pointer to the right to increase the sum
    } else {
      right--; // move the right pointer to the left to decrease the sum
    }
  }
  return null; // Return null if no pair is found
}

const result = twoSum(nums, target);
console.log(result ? result : "No pair found"); // Output: [2,7]

// TC: O(n log n) due to sorting the array
// SC: O(1) as we are using constant space