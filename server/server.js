var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
const {ObjectID} = require('mongodb');

var app = express();
var port = process.env.PORT || 3001;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) =>{
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  let id = req.params.id;

  if(!ObjectID.isValid(id)){
    res.status(404).send();
    return console.log('Id is not valid');
  }
  Todo.findById(id).then((todo) => {
    if(!todo){
      return res.status(404).send();
    }
    res.status(200).send({todo});
  }, (e) => res.status(400).send())
});

app.delete('/todos/:id', (req,res) => {
  let id = req.params.id;

  if(!ObjectID.isValid(id)){
    res.status(404).send();
    return console.log('Id is not valid');
  }
  Todo.findByIdAndRemove(id).then((todo) => {
    if(!todo){
       return res.status(404).send();
    }
    res.status(200).send({todo});
  }, (e) => res.status(400).send());

});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
