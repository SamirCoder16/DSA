// TwoSum
// Pattern : Hash Map
// TC = O(n) and SC = O(n)

function twoSum(nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (map.has(complement)) {
      console.log(map.get(complement), i);
    }

    map.set(nums[i], i);
  }

  return null;
}

const nums = [2, 3, 5, 5, 6, 9];
const target = 10;

const res = twoSum(nums, target);

console.log(res ? res : "Invalid target");
