const Logger = require ('./logger');

const logger = new Logger();

logger.on('message',(data)=> console.log('called listener'))
logger.log('hello world')