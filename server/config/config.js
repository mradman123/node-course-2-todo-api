var env = process.env.NODE_ENV || 'development';
//USe for local development
//var env = 'development';
if(env === 'development' || env === 'test'){
  var config = require('./config.json');
  var envConfig = config[env];

  Object.keys(envConfig).forEach((key) => {
  process.env[key]= envConfig[key];
  });
}

// if(env === 'development'){
//   process.env.PORT = 3001;
//   process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
// }else if(env === 'test'){
//   process.env.PORT = 3001;
//   process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
// }

console.log('env ****', env);
console.log(process.env.MONGODB_URI);
