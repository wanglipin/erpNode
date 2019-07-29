const express = require('express')
const fs = require('fs')
// 1.创建一个路由容器
const router = express.Router()
// 2.把所有的路由都挂载到这个路由容器中



// Mock
// router.get('/login', function (req, res) {
//   fs.readFile('./db.json', 'utf8', function (err, data) {
//     if (err) {
//       return res.status(500).send('Server error')
//     }
//     students: JSON.parse(data).students
//     console.log(JSON.parse(data).students)
//   })
// })
// 把router导出
module.exports = router
