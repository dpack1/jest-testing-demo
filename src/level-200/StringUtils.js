// src/level-200/stringUtils.js
function capitalizeFirstLetter(str) {
    if (typeof str !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  function reverseString(str) {
    if (typeof str !== 'string') return '';
    return str.split('').reverse().join('');
  }
  
  function isPalindrome(str) {
    if (typeof str !== 'string') return false;
    const reversed = str.split('').reverse().join('');
    return str === reversed;
  }
  
  module.exports = { capitalizeFirstLetter, reverseString, isPalindrome };
  