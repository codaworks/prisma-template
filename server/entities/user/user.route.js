const router = require('@koa/router')()
const compose = require('koa-compose')
const { consumes, returns } = require('../../middleware/validate-schema')
const { array, number } = require('zod')

const { user } = require('./user.model')
const db = require('./user.db')

router.get('/user',
	returns(array(number())),
	async ctx => await db().getAll()
)

router.get('/user/:id',
	returns(user),
	async ctx => await db().get(Number(ctx.params.id))
)

router.post('/user',
	consumes(user),
	returns(user),
	async ctx => await db().add(ctx.request.body)
)

router.put('/user/:id',
	consumes(user),
	returns(user),
	async ctx => await db().update(Number(ctx.params.id), ctx.request.body)
)


module.exports = () => compose([router.routes(), router.allowedMethods()])