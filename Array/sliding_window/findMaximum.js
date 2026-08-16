// FindMaximum Element
// Pattern: Sliding Window
// TC = O(n) and SC = O(1)

let nums = [2, 8, 19, 5, 6, 7, 10];

function findMaximum(nums) {
  let maxNum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (maxNum < nums[i]) {
      maxNum = nums[i];
    } else {
      continue;
    }
  }
  return maxNum;
}

console.log(findMaximum(nums));