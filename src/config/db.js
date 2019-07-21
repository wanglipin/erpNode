const env = process.env.NODE_ENV //  node环境的变量

// 配置
const MYSQL_CONFIG
const REDIS_CONFIG

if (env === 'dev') {
	MYSQL_CONFIG = {
		host: 'localhost',
		user: 'root',
		password: 'wanglipin',
		port: '3306',
		database: 'my_erp'
	}
	REDIS_CONFIG = {
		host: '127.0.0.1',
		port: '6379'
	}
}
if (env === 'production') {
	MYSQL_CONFIG = {
		host: 'localhost',
		user: 'root',
		password: 'wanglipin',
		port: '3306',
		database: 'my_erp'
	}
	REDIS_CONFIG = {
		host: '127.0.0.1',
		port: '6379'
	}
}
module.exports = {
	MYSQL_CONFIG,
	REDIS_CONFIG
}