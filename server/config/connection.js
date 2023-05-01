const mongoose = require('mongoose');

require ("dotenv").config()

mongoose.connect('mongodb+srv://Childy77:jlpicard@cluster0.ij34atg.mongodb.net/?retryWrites=true&w=majority' || 'mongodb://127.0.0.1:27017/takiwatanga',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

module.exports = mongoose.connection;
