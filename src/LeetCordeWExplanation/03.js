//! 88 Merge Sorted Array

var merge = function (nums1, m, nums2, n) {
  // * We start two variables ,one points to start of n arr2 and the other one to the tai of the arr1 ,in that way we can insert new values in arr1
  //* We check if the pointer if j is lower than the length of the 2nd array
  //* Finally we traverse through the array with the ++
  //* We sorted the array
  for (let i = m, j = 0; j < n; i++, j++) {
    nums1[i] = nums2[j];
  }

  nums1.sort((a, b) => a - b);
};

//! 27 Remove element

var removeElement = function (nums, val) {
  //* Verify if nums has content
  if (nums.length == 0) return 0;

  //* Set total to 0
  let c = 0;

  for (let i = 0; i < nums.length; i++) {
    //* Go through and verify values
    if (nums[i] !== val) {
      //*If found a coincidence the in the position of  c value insert the number
      nums[c] = nums[i];
      c++;
    }
  }

  console.log(c);
  return c;
};
