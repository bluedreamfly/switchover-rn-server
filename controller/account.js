const jwt = require('jsonwebtoken');
const util = require('util');
const Account = require('../model/account');
const https = require('https');
const querystring = require('querystring');
const baseUtil = require('../util/base')

module.exports = {

  async login(ctx) {
    let { phone } = ctx.request.body;
    try {
      let result = await Account.findOne({phone});
      if (!result) {
        try {
          result = await Account.create({phone});
          let token = jwt.sign({
            id: result._id,
          }, 'switchover token', { expiresIn: '1h' });
          ctx.body = {
            status: 0,
            msg: '',
            data: {
              token,
              id: result._id
            }
          }
        } catch(err) {

        }
        console.log(result);
      }
      
    } catch(err) {
      console.log(err);
    }
  },
  
  async sendMsgCode(ctx) {
    let { phone } = ctx.request.body;
    let code = baseUtil.generateMsgCode(5);

    console.log(ctx.request.connection)
    
    let redisGet = util.promisify(redisClient.get.bind(redisClient));
    let key = `smscode-${phone}`;
    let result;
    try {
      result = await redisGet(key);
      if (!result) {
        redisClient.set(key, code, 'EX', 30);
        result = code;
      }
      ctx.body = {
        status: 0,
        msg: '',
        data: {
          code: result
        }
      }
    } catch(err) {
      // ctx.body = {
      //   status: 1
      // }
    }
  }
  
}