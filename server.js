const express = require('express')
const bookRoute = require('./routes/book.route')

const app = express()
const PORT = 8001

app.use(express.json())

app.use('/books', bookRoute)

app.listen( PORT,() => console.log(`server listening at PORT:${PORT}`) )