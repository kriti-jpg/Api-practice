const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/myname',function (req,res){
      res.send('Kriti Shrestha')
})
app.get('/myfriendname',function(req,res){
      res.send('Jai Bhusal')
})
app.get('/myage',function(req,res){
      res.send('My age is 22')
})

app.listen(3000,function(req,res){
      console.log('Server is running on port 3000')
})