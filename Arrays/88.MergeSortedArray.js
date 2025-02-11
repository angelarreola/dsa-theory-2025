/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const mergedArray = [];
  const mergedArrayLength = m + n;

  let L1 = 0;
  let L2 = 0;
  let aux = 0;

  while (aux <= mergedArrayLength - 1) {
    if (L1 == m) {
      mergedArray[aux] = nums2[L2];
      L2++;
      aux++;
      continue;
    }
    if (L2 == n) {
      mergedArray[aux] = nums1[L1];
      L1++;
      aux++;
      continue;
    }
    if (nums1[L1] <= nums2[L2]) {
      mergedArray[aux] = nums1[L1];
      L1++;
    } else {
      mergedArray[aux] = nums2[L2];
      L2++;
    }
    aux++;
  }

  //   return mergedArray;
  nums1.splice(0, mergedArrayLength, ...mergedArray);
};

nums1 = [1, 2, 3, 0, 0, 0];
merge(nums1, 3, [2, 5, 6], 3);

console.log(nums1);
