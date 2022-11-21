require ('dotenv').config()
const express = require ('express')
const app = express()
app.get ('/', (req,res)=> {
    res.send ('Hello World')
})
app.get('*', (req,res)=> {
    res.status('<h1>404 Page</h1>')
})

app.listen(3000)
app.listen(process.env.PORT)

