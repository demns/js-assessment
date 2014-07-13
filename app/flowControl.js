if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  
  return {
    fizzBuzz : function(num) {
      if (!isNumber(num)) {
        return false;
      }
      if (!(num % 15)) {
        return 'fizzbuzz';
      }
      if (!(num % 5)) {
        return 'buzz';
      }
      if (!(num % 3)) {
        return 'fizz';
      }

      return num;
    }
  };
});
