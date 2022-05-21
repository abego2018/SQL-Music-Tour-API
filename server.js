// DEPENDENCIES
const express = require('express');
const { postgresMd5PasswordHash } = require('pg/lib/utils');
const app = express()
const { Sequelize } = require('sequelize')
require('dotenv').config();




// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})