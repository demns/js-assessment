if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
      listFiles: function (data, dirName) {
          console.log(data.dir);
          if (dirName === undefined) dirName = data.dir;
          if (dirName !== data.dir) {
              for (var i = 0; i < data.files.length; i++) {
                  if (data.files[i] instanceof Object) {
                      return this.listFiles(data.files[i], dirName);
                  }
              }
          }
          else {
              console.log("Go");
              return this.listOfFilesInFolder(data);
          }

          return;
      },

      listOfFilesInFolder: function (data, arr) {
          arr = arr || [];
          for (var i = 0; i < data.files.length; i++) {
              if (data.files[i] instanceof Object) {
                  this.listOfFilesInFolder(data.files[i], arr);
              }
              else {
                  console.log(data.files[i]);
                  arr.push(data.files[i]);
              }
          }
          console.log(arr);
          return arr;
      },

      permute: function (arr, permArr, usedChars) {
          var input = arr,
              i,
              ch;
          permArr = permArr || [];
          usedChars = usedChars || [];

          for (i = 0; i < input.length; i++) {
              ch = input.splice(i, 1);
              usedChars.push(ch);
              if (input.length === 0) {
                  permArr.push(usedChars.slice());
              }
              this.permute(input, permArr, usedChars);
              input.splice(i, 0, ch);
              usedChars.pop();
          }

          return permArr;
      }
  };
});
