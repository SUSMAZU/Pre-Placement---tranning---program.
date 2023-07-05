/* Question 6

Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input:s = "cbaebabacd", p = "abc"
Output: [0,6] */

function findAnagrams(s, p) {
    const result = [];
    const pFreqMap = {};
    const windowFreqMap = {};
  
    for (let i = 0; i < p.length; i++) {
      pFreqMap[p[i]] = (pFreqMap[p[i]] || 0) + 1;
    }
  
    let left = 0;
    let right = 0;
  
    while (right < s.length) {
      const rightChar = s[right];
      windowFreqMap[rightChar] = (windowFreqMap[rightChar] || 0) + 1;
  
      if (right - left + 1 === p.length) {
        if (isAnagram(windowFreqMap, pFreqMap)) {
          result.push(left);
        }
  
        const leftChar = s[left];
        windowFreqMap[leftChar]--;
        if (windowFreqMap[leftChar] === 0) {
          delete windowFreqMap[leftChar];
        }
  
        left++;
      }
  
      right++;
    }
  
    return result;
  }
  
  function isAnagram(map1, map2) {
    if (Object.keys(map1).length !== Object.keys(map2).length) {
      return false;
    }
  
    for (const char in map1) {
      if (map1[char] !== map2[char]) {
        return false;
      }
    }
  
    return true;
}
    
  
  const s = "cbaebabacd";
const p = "abc";
const indices = findAnagrams(s, p);
console.log(indices); // Output: [0, 6]
