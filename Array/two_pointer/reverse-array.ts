// Reverse array in place using the two-pointer technique
// Time Complexity: O(n)
// Space Complexity: O(1)

// given an array of numbers, reverse the array in place using the two-pointer technique

let nums = [1, 2, 3, 4, 5];

function reverseNumber (nums: number[]) : number[] {
   let left = 0;
   let right = nums.length - 1;

   while (left < right) {
     [nums[left], nums[right]] = [nums[right], nums[left]];
     left++;
     right--;
   }

   return nums;
}

const res = reverseNumber(nums);
console.log(res);