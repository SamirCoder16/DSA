// Remove duplicates from a sorted array using the two-pointer technique in-order/in-place.

// In-Order means no space is used for this problem, and the array is modified in place.
// The function returns the new length of the array after removing duplicates.

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

function removeDuplicate(nums: number[]): number{
  if (nums.length === 0) return 0;

  let i = 0;
  let uniqueNumber = 1;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) { // here will get the unique numsber
      nums[i + 1] = nums[j];
      i++;
      uniqueNumber++;
    } else {
      continue;
    }
  }
  return uniqueNumber;
}

const result = removeDuplicate(nums);

console.log(result);