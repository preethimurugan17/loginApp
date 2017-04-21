'use strict';
var mongoose = require('mongoose');

module.exports = {
    'mongoConnURL': 'mongodb://localhost:27017/loginapp',
    'connectDB': function() {
        mongoose.connect(this.mongoConnURL);
    },
    'disconnectDB': function() {
        mongoose.disconnect(this.mongoConnURL);
    }
};

mongoose.connection.on('open', function() {
    console.log('mongoDB connection established');
});

mongoose.connection.on('error', function() {
    console.log('mongoDB connection has some errors');
});

mongoose.connection.on('close',function(){
    console.log('mongoDB successfully connection closed');
});