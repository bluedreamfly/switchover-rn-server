
const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
const mongoose = require('mongoose');
const redis = require('redis');
const redisClient = redis.createClient();

global.redisClient = redisClient;

mongoose.connect('mongodb://localhost/test', {
  useMongoClient: true
});
// const db = mongoose.createConnection('mongodb://localhost/test');
// global.db = db;

// var Cat = mongoose.model('Cat', mongoose.Schema({ name: String }));

// var kitty = new Cat({ name: 'Zildjian' });
// kitty.save(function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('meow');
//   }
// });

// Cat.find((err, docs) => {
//   console.log(docs);
// })
// db.on('error', function() {
//   console.log('hello world');
// })


const routers = require('./router');



app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

routers.init(router);

// router.get('/', (ctx, next) => {
//   ctx.body = 'hello mongodb';
// })
app.listen(4000);



