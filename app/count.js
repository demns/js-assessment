if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
      count: function (start, end) {
          var nIntervId = setInterval(flash, 100);

          function flash() {
              console.log(start++);
              if (start > end) clearInterval(nIntervId);
          }

          return {
              cancel: function () {
                  clearInterval(nIntervId);
              }
          };
    }
  };
});