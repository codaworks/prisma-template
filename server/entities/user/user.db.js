const prisma = require('../../prisma')
const assert = require('http-assert')


module.exports = () => ({
    async getAll() {
        const result =  await prisma.user.findMany({
            select: { id: true }
        })

        return result.map(record => record.id)
    },

    async get(id) {
        const user = await prisma.user.findFirst({
            where: {
                id
            }
        })

        assert(user, 404)
        return user
    },

    async add(user) {
        return await prisma.user.create({
            data: user
        })
    },

    async update(id, user) {
        return await prisma.user.update({
            where: {
                id
            },
            data: user
        })
    }
})