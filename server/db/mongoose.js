var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://mradman123:1234@ds157740.mlab.com:57740/todo-app-api'
};
mongoose.connect(db.mlab || db.localhost);



// mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
};
