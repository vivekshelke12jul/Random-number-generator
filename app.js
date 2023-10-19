const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    console.log('random route accesed')
    const num = Math.floor(Math.random()*10)
    console.log(num)
    res.status(200).json({info: num})
})


app.listen(3000, console.log('server started'))