const express = require('express');
const bodyParser = require('body-parser');
const cookieparser = require('cookie-parser'); // 解析cookie
const logger = require('morgan'); // 日志插件，自动生产日志
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const indexRouter = require('./src/router/router');
const usersRouter = require('./src/router/user');
// 创建app
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());; // 获取json格式数据
app.use(bodyParser.urlencoded({ extended: true })); // 获取 表单格式
app.use(cookieparser);

const { redisClient } = require('./src/db/redis')
const seeionStore = new RedisStore({
  client: redisClient
})
app.use(session({
  secret: 'wanglipin',
  cookie: {
    path: '/',//  不写也可以默认配置
    httpOnly: true, // 禁止客户端获取和修改cookie,不写也可以，默认配置
    maxAge: 24 * 60 * 60 *1000,
    store: seeionStore // 用redis存储session，如果不设置则存储到内存中
  }
}))
// 把路由挂载到 app服务中
app.use('/', indexRouter);
app.use('/user', usersRouter);

app.use((err, req,res, next) => {
  next(createError(404));
})
// error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err: {};
  res.status(err.status || 500);
  res.render('error');
})

app.listen(3000, () => {
  console.log('express app is running.....')
})