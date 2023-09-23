import mysql  from 'serverless-mysql'

export const conn = mysql({
    config: {
        host: '127.0.0.1',
        user: 'root',
        password: '804804',
        port: 3306,
        database: 'nextmysqlcrud'
    }
})
