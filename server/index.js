const Koa = require('koa')

const errorHandler = require('./middleware/error-handler')
const { koaBody } = require('koa-body')


const app = new Koa()
app.use(errorHandler())
    .use(koaBody())
    .use(async (ctx, next) => {
        ctx.response.body = 'Hello'
    })

if (process.env.NODE_ENV === 'serverless') {
    module.exports = app
} else {
    app.listen(3000)
}