const express = require('express')
require('dotenv').config()
const { drizzle } = require( 'drizzle-orm/node-postgres')
const { eq } = require( 'drizzle-orm')
const { usersTable } = require('../src/db/schema')


const router = express.Router()

router.get('/', (req,res) => {
    return res.status(200).json({message:'hello from server'})
})



router.post('/', async (req,res) => {
    console.log('adding a book');
    const name = req.body.name
    const description = req.body.name
    const authorId = req.body.authorId
    console.log(name, description, authorId);
    
    return res.status(200).json({message:"successful"})
    
})

module.exports = router