var events = require('events');

/* var myEmitter = new events.EventEmitter();

myEmitter.on('anEvent', function(msg){
console.log(msg);
});

myEmitter.emit('anEvent', 'the event was emitted'); */

var util = require('util');

var Person = function(name){
    this.name = name;
}
util.inherits(Person, events.EventEmitter);

var abhi = new Person('abhi');
var shin = new Person('shin');
var people = [abhi, shin];

people.forEach(function(person){
    person.on('eat', function(msg){
        console.log(person.name + ' eats: ' +msg);
    });
});

abhi.emit('eat', 'chicken');
shin.emit('eat', 'ramen');