const Koa = require('koa')

const errorHandler = require('./middleware/error-handler')
const { koaBody } = require('koa-body')
const user = require('./entities/user/user.route')

const app = new Koa()

app.use(errorHandler())
    .use(koaBody())
    .use(user())

if (process.env.NODE_ENV === 'serverless') {
    module.exports = app
} else {
    app.listen(8080)
}