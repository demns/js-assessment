if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        var str = num.toString(2),
            str64bit = new Array(65 - str.length).join('0') + str;

        return parseInt(str64bit[64-bit], 10);
    },

    base10: function(str) {
        // var strlen = str.length, 
        //     sum = 0,
        //     i,
        //     j;
        
        // for(var i = strlen-1, j = 1; i>=0; i--, j *= 2){
        //     sum += str[i]*j;
        // }

        // return sum;
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        var str = num.toString(2);
        return new Array(9 - str.length).join('0') + str;
    },

    multiply: function(a, b) {
        return parseFloat((a * b).toPrecision(10));
    }
  };
});

