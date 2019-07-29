const xss = require('xss')
const { exec, escape  } = require('../db/mysql')
const { genPassword } = require('../utils/cryp')

const login = (username, password) => {
  username = escape(username)

  //生成密码
  password = genPassword(password)
  password = escape(password) // escape sql原生方法，防止sql注入

  const sql = `
    select username, realname from users where username = '${username}' add password = '${ password }'
  `
  return exec(sql).then( rows => {
    return rows[0] || {}
  })
}

module.exports = {
  login
}
