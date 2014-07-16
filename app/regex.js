if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        var re = new RegExp(/^([^0-9]*)$/);
        return !re.test(str);
    },

    containsRepeatingLetter : function(str) {


    },

    endsWithVowel : function(str) {

    },

    captureThreeNumbers : function(str) {

    },

    matchesPattern : function(str) {
        return str.match("\b(\d{3}-\d{3}-\d{4})\b") === null;
    },

    isUSD : function(str) {

    }
  };
});
