if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction: function (str) {
        var args = Array.prototype.slice.call(arguments);
        return function () {
            return args.concat(Array.prototype.slice.call(arguments)).join(', ');
        };
    },

    makeClosures: function (arr, fn) {
        return arr.map(function (num) {
            return function () { return fn(num); };
        });
    },

    partial: function (fn, str1, str2) {
        var args = Array.prototype.slice.call(arguments, 1);
        return function () {
            return fn.apply(null, args.concat(Array.prototype.slice.call(arguments)));
        };
    },

    useArguments: function () {
        var args = Array.prototype.slice.call(arguments);
        return args.reduce(function (x, y) {
            return x + y;
        });
    },

    callIt : function(fn) {
        return fn.apply(null, Array.prototype.slice.call(arguments, 1));
    },

    partialUsingArguments : function(fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        return function () {
            return fn.apply(null, args.concat(Array.prototype.slice.call(arguments)));
        };
    },

    curryIt: function (fn) {
       
    }
  };
});
