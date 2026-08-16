// Probelm : 3Sum Closest
// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
// Return the sum of the three integers. You may assume that each input would have exactly one solution.

function threeSumClosest(nums: number[], target: number): number {

    let newNums = nums.sort((a, b) => a - b);
    let n = newNums.length;
    let max_diff = Infinity;
    let res_sum = 0;

    for (let i = 0; i < n - 2; i ++) {
        
        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            let sum = newNums[i] + newNums[left] + newNums[right];

            let diff = Math.abs(sum - target);
            if (diff < max_diff) {
                max_diff = diff;
                res_sum = sum;
            }

            if (sum == target) {
                left ++;
                right --;
            } else if (sum < target) {
                left ++;
            } else {
                right --;
            }
        }
    }

    return res_sum;
}


let nums = [-1,2,1,-4];
let target = 1;

const res = threeSumClosest(nums, target);
console.log(res);