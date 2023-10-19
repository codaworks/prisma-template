const consumes = schema => async (ctx, next) => {
    if (ctx.request.body) {
        try {
            ctx.request.body = await schema.validateAsync(ctx.request.body)
        } catch (e) {
            e.status = 400
            throw e
        }
    }

    await next()
}

const returns = schema => async (ctx, next) => {
    let body = await next();
    if(ctx.response.body) {
        body = ctx.response.body
    } else {
        ctx.response.body = body
    }

    await schema.validateAsync(body)
}

module.exports = {
    consumes, returns
}