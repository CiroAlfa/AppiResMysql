import mysql  from 'serverless-mysql'

export const pool = mysql({
    config: {
        host: 'localhost',
        user: 'root',
        password: 'faztpassword',
        port: 3306,
        database: 'nextmysqlcrud'
    }
})