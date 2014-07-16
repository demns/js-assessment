if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        var re = new RegExp(/^([^0-9]*)$/);
        return !re.test(str);
    },

    containsRepeatingLetter : function(str) {
        var re = new RegExp(/([A-Za-z])\1+/);
        return re.test(str);
    },

    endsWithVowel: function (str) {
        var re = new RegExp(/[aeiouAEIOU]$/);
        return re.test(str);
        
    },

    captureThreeNumbers : function(str) {
        var re = new RegExp(/(\d{3})/),
            result = re.exec(str);
        if (result === null) {
            return false;
        }
        else {
            return result[0];
        }
        
    },

    matchesPattern: function (str) {
        var re = new RegExp(/\b(\d{3}-\d{3}-\d{4})$/);
        return re.test(str);
    },

    isUSD : function(str) {
        var re = new RegExp(/^\$[+-]?[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$/);
        return re.test(str);
    }
  };
});
