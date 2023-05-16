const express = require('express')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()
const app = express()


//midlleware
app.use(express.json())



//login -> authorization   -------> books
app.post('/login', (req, res) => {
    const data = req.body
    console.log(data)
    //jwt.sign(payload, secretOrPrivateKey, [options, callback])     jwt.sign(),vậy sign là gì, trong sign có những đối số nào
    const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 3600 })
    res.json({ accessToken })
})




const PORT = 5500
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})