var express = require('express');
var sync = require('synchronize');

var router = express.Router();


const multiplyMatrices = () => {
  var m1 = [[1,2],[3,4],[1,2],[3,4]];
  var m2 = [[5,6],[7,8],[5,6],[7,8]];

  var m1 = [];
  var m2 = [];
  for (var i = 50000; i >= 0; i--) {
    m1.push(
      [Math.round(i*Math.random()), Math.round(i*Math.random())]
    );
    m2.push(
      [Math.round(i*Math.random()), Math.round(i*Math.random())]
    );
  };

  var result = [];

  for (var i = 0; i < m1.length; i++) {
      result[i] = [];
      for (var j = 0; j < m2[0].length; j++) {
          var sum = 0;
          for (var k = 0; k < m1[0].length; k++) {
              sum += m1[i][k] * m2[k][j];
          }
          result[i][j] = sum;
      }
  }
  return result;
};


/* GET users listing. */
router.get('/', (req, res, next) => {


  var mResult = multiplyMatrices()

  /*In Google Chrome and Firefox you can do:*/

  // console.log(mResult) /* it shows the matrix in a table */
  res.send(mResult);
});

module.exports = router;
