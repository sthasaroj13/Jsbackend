require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/email',(req,res) =>{
    res.send('sarojshrestha@gmail.com')

})
app.get('/login',(req,res)=>{
    res.send('<h1>helloo  user you are login </h1>')
})
app.get('/youtube', (req,res)=>{
    res.send('<h2>chai aur code</h2>')

})
    
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})