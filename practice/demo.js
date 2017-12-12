var counter = function(arr){
    return 'there are ' + arr.length + ' element(s) in this array';
};

var add = function(a, b){
  return `Addition is ${a+b}`;
};

/* module.exports.counter = counter;
module.exports.add = add; */

module.exports ={
    counter: counter,
    add: add
}