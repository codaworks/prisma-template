const { object, string, number, date } = require('zod')

const user = object({
    id: number().optional(),
    name: string(),
    email: string(),
    createDate: date().optional(),
    updateDate: date().optional()
})

module.exports = {
    user
}