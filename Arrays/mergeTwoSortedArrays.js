function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  // mergedArrayLength = arr1.length + arr2.length;

  for (
    let i = 0, L1 = 0, L2 = 0;
    L1 <= arr1.length - 1 && L2 <= arr2.length - 1;
    i++
  ) {
    if (arr1[L1] <= arr2[L2]) {
      mergedArray[i] = arr1[L1];
      L1++;

      if (L1 >= arr1.length - 1) mergedArray[i + 1] = arr2[L2];
    } else {
      mergedArray[i] = arr2[L2];
      L2++;

      if (L2 >= arr2.length - 1) mergedArray[i + 1] = arr1[L1];
    }
  }
  return mergedArray;
}

const r = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);

console.log(r);
