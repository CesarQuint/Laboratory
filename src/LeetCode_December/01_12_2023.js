const notEqual = (arr, value) => {
  let total = 0;
  let newArr = [];

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] !== value) {
      newArr[total] = arr[index];
      total++;
    }
  }
  return { total, newArr };
};

//*Two solutions

let arrExample = [1, 0, 1, 1, 0, 1];

var findMaxConsecutiveOnes = function (nums) {
  //note: We set a max value as 0
  let max = 0,
    //*note: We initialice a current value to 0 this is a temporal max

    curr = 0;

  //! We iterate through the array but we check the value thats why we uso a for of
  for (let k of nums) {
    //note: We evaluate which one is bigger the last max value or the current new value ,with  Math.max()
    max = Math.max(max, (curr += k));
    //note: After that we check if the current value in the iteration is 0 ,in that case we set current to 0
    if (!k) curr = 0;
  }
  //! Finally we retun the maxValue
  return max;
};

var findMaxConsecutiveOnes = function (nums) {
  let oneCountPointer = 0;
  let maxCount = 0;
  //* Here we initialice the everExisted MaxValue and a currentMaxValue

  for (let i = 0; i < nums.length; i++) {
    //note: Here we Evaluate the value inside the array with [] and we check again with de Max.math but we wrapped all the function inside an id to check if the current value is different to 1
    if (nums[i] === 1) {
      oneCountPointer++;
      maxCount = Math.max(oneCountPointer, maxCount);
    } else {
      oneCountPointer = 0;
    }
  }

  return maxCount;
};

//example:
//note:
//?:
//!:
//todo:
//*normal
//Regular
