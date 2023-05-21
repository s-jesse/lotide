// countLetters function should take in a sentence  and return the count of how many times each letter occurs in the sentence.

const countLetters = function(sentence) {
  let storageObj = {};

  for (const key of sentence) {
    if (key !== " ") {
      if (storageObj[key]) {
        storageObj[key] = storageObj[key] + 1;
      } else {
        storageObj[key] = 1;
      }
    }
  }
  return storageObj;

};
  
module.exports = countLetters;
