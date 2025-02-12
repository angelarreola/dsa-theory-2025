/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//   for (let i = 0; i <= nums.length; i++) {
//     let aux = nums[i];
//     for (let j = i + 1; j <= nums.length; j++) {
//       if (aux + nums[j] == target) {
//         return [i, j];
//       }
//     }
//   }
// };

var twoSum = function (nums, target) {
  const myHash = new Map();

  for (let i = 0; i < nums.length - 1; i++) {
    const complement = target - nums[i];
    if (myHash.has(complement)) {
      return [myHash.get(complement), i];
    } else {
      myHash.set(nums[i], i);
    }
  }
};

const nums = [2, 7, 11, 15];

console.log(twoSum(nums, 9)); // [0, 1]
