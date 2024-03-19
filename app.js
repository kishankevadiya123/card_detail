const express = require('express')
const fs = require('fs')
const app = express()

app.set('view engine' , 'ejs')

app.get('/' , (req , res) => {

  let jsonData = fs.readFileSync('./json/data.json' , 'utf-8') 
  let dataconvert = JSON.parse(jsonData)

  res.render('index' , {data: dataconvert})  
})
app.get('/product' , (req , res) => {

  let jsonData = fs.readFileSync('./json/data.json' , 'utf-8') 
  let dataconvert = JSON.parse(jsonData)

  let Id = req.query.Id

  res.render('product' , {data: dataconvert[Id]})  
})

app.listen(3000)
