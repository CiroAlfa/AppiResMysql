import mysql  from 'serverless-mysql'

export const conn = mysql({
    config: {
        host: 'localhost',
        user: 'root',
        password: '804804cM$',
        port: 4550,
        database: 'nextmysqlcrud'
    }
})