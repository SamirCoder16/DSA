// Triplet Sum to Zero
// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.
// Example 1:
// Input: [-3, 0, 1, 2, -1, 1, -2]
// Output: [-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]

// contraints: do not repeat the same triplet in the output.

function searchTriplets(nums: number[]): number[][] {
  let newNums = nums.sort((a, b) => a - b);
  let triplets: number[][] = [];
  let n = newNums.length;

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && newNums[i] == newNums[i - 1]) continue;

    // formula-1 -> left + right = -nums[i] == 0
    // formula-2 => nums[left] + nums[right] + nums[i] = 0;
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      let sum = newNums[left] + newNums[right] + newNums[i];

      if (sum == 0) {
        triplets.push([newNums[i], newNums[left], newNums[right]]);

        left++;
        right--;

        // skip duplicate left value .
        while (left < right && newNums[left] == newNums[left - 1]) {
          left++;
        }
        // skip duplicate right value .
        while (right > left && newNums[right] == newNums[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return triplets;
}

let nums = [-1,0,1,2,-1,-4];
let triplets = searchTriplets(nums);
console.log(triplets);

// TC: O(n^2) - three nested loops
// SC: O(n) - result array

// optimised approach
