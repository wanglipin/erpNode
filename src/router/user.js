const express = require('express')
const { login } = require('../controller/user')
const { SuccessMode, ErrorMode } = require('../models/resModel')
// 1.创建一个路由容器
const router = express.Router()
// 2.把所有的路由都挂载到这个路由容器中
router.post('/login', (req, res, next) => {
  const { username, password } = req.body
  console.log(req.body)
  const result = login(username, password)
  return result.then(data => {
    if (data.username) {
      // 设置session
      req.session.token = 'admin-token'
      res.json(
        new SuccessMode()
      )
      return
    }
    res.json(
      new ErrorMode('登陆失败')
    )
  })
})

module.exports = router
