var express = require('express');
var server = express();
var routes = require('./routes/routes');
var mongoose = require('mongoose');
const cors = require('cors');
mongoose.connect("mongodb://localhost:27017/myapp", { useNewUrlParser: true, useUnifiedTopology: true }, function checkDB(error) {
    if (error) {
        console.log("Connection to User DB failed")
    } else {
        console.log("Connection to User DB is successful")
    }
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(8000, function check(error) {
    if (error) {
        console.log("Server failed")
    } else {
        console.log("Server started")
    }
});