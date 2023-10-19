module.exports = () => async (ctx, next) => {
    try {
        await next()

        // don't change status for missing endpoints
        if (ctx.response.body && ctx.status === 404) 
            ctx.status = 200
    } catch (e) {
        ctx.status = e.status || 500

        if (ctx.status >= 500)
            throw e
        else
            ctx.body = { message: e.message }
    }
}