//-Find the coincidence

var strStr = function (haystack, needle) {
  if (needle === '') {
    return 0;
  }

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let found = true;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        found = false;
        break;
      }
    }
    if (found) {
      return i;
    }
  }

  return -1;
};

var strStr2 = function (haystack, needle) {
  return haystack.indexOf(needle);
};

//*Find SubString
var longestCommonPrefix = function (strs) {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix.length === 0) {
        return '';
      }
    }
  }

  return prefix;
};

var longestCommonPrefix = function (strs) {
  let result = '',
    prefix = strs[0];

  for (let i = 0; i < prefix.length; i++) {
    if (strs.some(str => str[i] !== prefix[i])) {
      break;
    }
    result += prefix[i];
  }

  return result;
};
