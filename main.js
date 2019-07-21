const express = require('express');
const bodyParser = require('body-parser')
const router = require('./router')
// 创建app
const app = express()

// router(app)
// 把路由挂载到 app服务中
app.use(router)
app.listen(3000, () => {
  console.log('express app is running.....')
})