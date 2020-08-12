// given two strings check if they are valid anagrams
//eg: silent, listen

const isAnagram = (stringA, stringB) => {
  const createCharMap = (text) => {
    let charMap = {};

    for (let val of text) {
      if (charMap.hasOwnProperty(val)) {
        charMap[val]++;
      } else {
        charMap[val] = 1;
      }
    }
    return charMap;
  };

  if (stringA.length == stringB.length) {
    let stringACharMap = createCharMap(stringA);
    let stringBCharMap = createCharMap(stringB);

    for (let val in stringACharMap) {
      if (stringACharMap[val] !== stringBCharMap[val]) {
        return false;
      } else {
        return true;
      }
    }
  } else {
    return false;
  }
};

console.log(isAnagram("silent", "listen"));
