global.measuredExecutionTime = function (fn) {
  return function() {
    var result;
    console.time('execution time');
    result = fn.apply(this, arguments);
    console.timeEnd('execution time');
    return result;
  };
};

var sum = function(a, b) {
  return a + b;
};

var measuredSum = global.measuredExecutionTime(sum);
console.log(measuredSum(10, 20));
