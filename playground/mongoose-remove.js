const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
/* 
Todo.remove({}).then((result) => {
   console.log(result); 
}); */

Todo.findOneAndRemove({_id: ''}).then((todo) => {

});

Todo.findByIdAndRemove('5a310c0b3032f308912d9199').then((todo) => {
 console.log(todo);
});