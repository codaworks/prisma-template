module.exports = (...valid) => async (ctx, next) => {
    if (!ctx.is(...valid)) {
        ctx.throw(415)
    }

    await next()
}