if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
      async: function (value) {
          return new Promise(function myfunction(resolve) {
              resolve(value);
          });
      },

      manipulateRemoteData: function (url) {
          return new Promise(function (resolve) {
              var arr = [];
              var req = new XMLHttpRequest();
              req.open('GET', url);

              req.onload = function () {
                  if (req.status === 200) {
                      var response = req.response;
                      var obj = JSON.parse(response);

                      for (var i = 0; i < obj.people.length; i++) {
                          arr.push(obj.people[i].name);
                      }
                      arr.sort();

                      resolve(arr);
                  }
              };

              req.send();
          });
      },

  };
});
