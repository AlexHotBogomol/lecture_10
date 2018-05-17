global.bind = function (fn, context) {
  var argArray = [].slice.call(arguments, 2);
  return function() {
    return fn.apply(context, argArray);
  };
};

var user = {
  name: 'sasha'
};

var user2 = {
  name: 'vova'
};

var printName = function (age, height) {
  return this.name + age + height;
};

var newPrintName = global.bind(printName, user2, 15, 20);


console.log(printName.call(user));
console.log(printName.call(user2));
console.log(newPrintName.call(user));
console.log(newPrintName.call(user2));
