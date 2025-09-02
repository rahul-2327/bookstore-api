const { integer, pgTable, varchar, text } = require("drizzle-orm/pg-core")



const authorTable = pgTable("authors", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    author: varchar({ length:50 }).notNull(),
})


const bookTable = pgTable("books", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length:50 }).notNull(),
    description: text({ MaxLength:250 }),
    authorId: integer('author_id').references(() => authorTable.id, {
        onDelete: 'cascade',
        onUpdate: 'cascade',
    }),
})


module.exports = {
    authorTable,
    bookTable,
}