const reqEvent = (event) => require(`../events/${event}`);
require('events').EventEmitter.defaultMaxListeners = 15;
module.exports = client => {
  client.on('message', reqEvent('message'));
};
