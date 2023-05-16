const express = require('express')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()
const app = express()


//midlleware
app.use(express.json())


const books = [
    {
        id: 1,
        name: 'A',
        author: 'AAA'
    },
    {
        id: 2,
        name: 'B',
        author: 'BBB'
    }
]




app.get('/books',authenToken ,(req, res) => {
    res.json({ status: 'Success', data: books })
})
//middleware cua /books
function authenToken(req, res, next) {
    const authorizationHeader = req.headers['authorization']
    //Beaer [token]
    const token = authorizationHeader.split(' ')[1]
    if(!token) res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
        console.log(err, data)
        if(err) res.sendStatus(403)
        next()
    })
}




const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})