const fs = require('fs');

if (fs.existsSync('./public')) {
  process.env.NODE_ENV = 'production';
  process.env.databaseUri = 'mongodb://B05:shubham@ds159254.mlab.com:59254/geddit'; // Databse URI and database name
  process.env.databaseName = 'production database: geddit'; // Database name
} else {
  process.env.NODE_ENV = 'development';
  process.env.databaseUri = 'mongodb://localhost:27017/gedditLocal'; // Databse URI and database name
  process.env.databaseName = 'development database: gedditLocal'; // Database name
}
