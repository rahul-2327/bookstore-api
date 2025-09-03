// const { integer, pgTable, varchar, text, uuid} = require("drizzle-orm/pg-core")



// const authorTable = pgTable("authors", {
//     id: uuid().primaryKey().defaultRandom(),
//     author: varchar({ length:50 }).notNull(),
// })


// const bookTable = pgTable("books", {
//     id: uuid().primaryKey().defaultRandom(),
//     name: varchar({ length:50 }).notNull(),
//     description: text({ MaxLength:250 }),
//     authorId: integer('author_id').references(() => authorTable.id, {
//         onDelete: 'cascade',
//         onUpdate: 'cascade',
//     }),
// })


// module.exports = {
//     authorTable,
//     bookTable,
// }