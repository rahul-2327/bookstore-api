const { pgTable, varchar, text, uuid} = require("drizzle-orm/pg-core")
const {authorTable} = require('./author.model')


const bookTable = pgTable("books", {
    id: uuid().primaryKey().defaultRandom(),
    title: varchar({ length:50 }).notNull(),
    description: text({ MaxLength:250 }),
    authorId: uuid().references(() => authorTable.id, {
        onDelete: 'cascade',
        onUpdate: 'cascade',
    }),
})


module.exports = bookTable