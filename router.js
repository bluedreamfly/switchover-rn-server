const Account = require('./controller/account');
const User = require('./controller/user');

module.exports = {
  init(router) {
    router.post('/account/login', Account.login);
    router.post('/account/sendMsgCode', Account.sendMsgCode);
  }
}
