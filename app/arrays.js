if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum: function (arr) {
        return arr.reduce(function (previousValue, currentValue, index, array) {
            return previousValue + currentValue;
        });
    },

    remove: function (arr, item) {
        return arr.filter(function (el) {
            return item !== el;
        });
    },

    removeWithoutCopy : function(arr, item) {
        var pos = arr.indexOf(item);
        while (pos > -1) {
            arr.splice(pos, 1).len;
            pos = arr.indexOf(item);
        }
        return arr;
    },

    append : function(arr, item) {
        return arr.concat(item);
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        return arr.filter(function (el) {
            return item === el;
        }).length;
    },

    duplicates : function(arr) {
        arr.sort();
        var toReturn = [];

        for (var i = 1; i < arr.length; i++) {
            if (arr[i] === arr[i - 1]) {
                if (toReturn.indexOf(arr[i]) < 0) {
                    toReturn.push(arr[i]);
                }
            }
        }
        return toReturn;
    },

    square : function(arr) {
        return arr.map(function (item) {
            return Math.pow(item, 2);
        });
    },

    findAllOccurrences: function (arr, target) {
        var toReturn = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
                toReturn.push(i);
            }
        }
        return toReturn;
    }
  };
});
