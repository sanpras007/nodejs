//const mod = require('./userModule')
//mod.readuser();

const {createuser,readuser} = require('./userModule');
const http = require('http');


createuser();
readuser();
