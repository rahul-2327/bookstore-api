const { pgTable, varchar, uuid} = require("drizzle-orm/pg-core")

const authorTable = pgTable("authors", {
    id: uuid().primaryKey().defaultRandom(),
    firstname: varchar({ length:55 } ).notNull(),
    lastname: varchar({ length:55 } ),
    email: varchar({length:50}).notNull().unique()
})


module.exports = authorTable