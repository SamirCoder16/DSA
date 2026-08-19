// Problem : Duch National Flag Problem
// Given an array of 0s, 1s and 2s, sort them in-place so that all 0s come first, followed by all 1s and then all 2s.
// You should not use the library's sort function for this problem.

// brute force approach -> 3 aray TC : O(n) SC : O(n)
function dutchNationalFlag(nums: number[]): number[] {
  let zerosArray: number[] = [];
  let onesArray: number[] = [];
  let twosArray: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zerosArray.push(nums[i]);
    } else if (nums[i] === 1) {
      onesArray.push(nums[i]);
    } else {
      twosArray.push(nums[i]);
    }
  }

  let index = 0;
  for (let i = 0; i < zerosArray.length; i++) {
    nums[index++] = zerosArray[i];
  }
  for (let i = 0; i < onesArray.length; i++) {
    nums[index++] = onesArray[i];
  }
  for (let i = 0; i < twosArray.length; i++) {
    nums[index++] = twosArray[i];
  }

  return nums;
}

// let inputArray = [2, 0, 2, 1, 1, 0];
// console.log(dutchNationalFlag(inputArray));

// optimized approach -> 3 pointer approach TC : O(n) SC : O(1) but passes = 2

function dutchNationalFlagOptimized(nums: number[]): number[] {
  let zero = 0;
  let one = 0;
  let two = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zero++;
    } else if (nums[i] === 1) {
      one++;
    } else {
      two++;
    }
  }

  let index = 0;
  for (let i = 0; i < zero; i++) {
    nums[index] = 0;
    index++;
  }

  for (let i = 0; i < one; i++) {
    nums[index] = 1;
    index++;
  }

  for (let i = 0; i < two; i++) {
    nums[index] = 2;
    index++;
  }

  return nums;
}

// let inputArray = [2, 0, 2, 1, 1, 0];
// console.log(dutchNationalFlagOptimized(inputArray));

// best approach -> 3 pointer approach TC : O(n) SC : O(1) passes = 1

function dutchNationalFlagBest(nums: number[]): number[] {
  let n: number = nums.length;
  let low: number = 0;
  let mid: number = 0;
  let high: number = n - 1;

  while (mid <= high) {
    if (nums[mid] == 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] == 1) {
      mid++;
    } else if (nums[mid] == 2) {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }

  return nums;
}

let inputArray = [2, 0, 2, 1, 1, 0];
console.log(dutchNationalFlagBest(inputArray));
