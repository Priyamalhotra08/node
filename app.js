const http = require('http')

const data = http.createServer((req , res) => {
  if(req == '/') {
    res.end("This is Home Page ")

  }
  if(req == '/about') {
    res.end("This is About Page ")
  }
  if(req == '/contact') {
    res.end("This is Contact Page ")
  }

  if(req == '/help') {
    res.end("This is Help Page ")
  }
})
data.listen(3000)