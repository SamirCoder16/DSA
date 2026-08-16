// Sliding window maximum problem
// Given an array of integers and a window size k, find the maximum value in each sliding window of size k.
// Pattern : Sliding Window / Monotonic Queue

// Example:
// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]

let input = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 3;

function slidingWindowMaximum(nums, k) {
    // best approach will be dQueue .
    // Candidate Elimination

    let dq = []; // Deque to store indices of current window elements
    let result = []; // Result array to store maximums

    
}