//* Plus one exercise
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
      if (i === 0) {
        digits.unshift(1);
        return digits;
      }
    }
  }
};

//*ArraySign

var arraySign = function (nums) {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) return 0;
    const product = nums[i];
    result = result === 0 ? product : result * product;
  }
  if (result > 0) return 1;
  else return result < 0 ? -1 : 0;
};

//! Guess the word GOOGLE

var findSecretWord = function (words, master) {
  const randomWord = words[Math.floor(Math.random() * words.length)];
  const matches = master.guess(randomWord);

  if (matches == 6) {
    return;
  } else {
    const newWords = words.filter(el =>
      findSimilarChars(el, randomWord, matches)
    );
    return findSecretWord(newWords, master);
  }
};

var findSimilarChars = function (word1, word2, matches) {
  if (word1 == word2) return false;

  let numOfSimilarChars = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] == word2[i]) {
      numOfSimilarChars++;
    }
  }

  if (matches == 0 && numOfSimilarChars == 0) return true;
  if (!matches) return false;
  if (numOfSimilarChars == 0 && matches) return false;
  return numOfSimilarChars >= matches ? true : false;
};

var canMakeArithmeticProgression = function (arr) {
  if (arr.length === 2 && arr[1] > arr[0]) {
    return true;
  }
  // let sortedArr = arr.sort()
  let sortedArr = arr.sort((a, b) => a - b);

  let differenceTracker = sortedArr[1] - sortedArr[0];

  for (let i = 1; i < sortedArr.length - 1; i++) {
    if (sortedArr[i + 1] - sortedArr[i] !== differenceTracker) {
      return false;
    }
  }
  return true;
};
