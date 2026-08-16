// Move all zeros to the end of the array while maintaining the relative order of non-zero elements

let nums = [1, 1, 0, 0, 3, 4, 6, 0, 12];

function moveZeroes(nums: number[]): number[] {
  let firstPointer = 0;

  for (let secondPoinetr = 0; secondPoinetr < nums.length; secondPoinetr++) {
    if (nums[secondPoinetr] !== 0) {
      [nums[firstPointer], nums[secondPoinetr]] = [
        nums[secondPoinetr],
        nums[firstPointer],
      ];
      firstPointer++;
    } else {
      continue;
    }
  }

  return nums;
}


const result = moveZeroes(nums);
console.log(result);

// Time Complexity: O(n) - We traverse the array once, where n is the length of the array.
// Space Complexity: O(1) - We are using a constant amount of extra space regardless of the input size.