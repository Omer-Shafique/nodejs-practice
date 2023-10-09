const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url == '/'){
res.write('welcome to our home page ')
// res.end()
    }
    if (req.url == '/about'){
res.write('welcome to our about page ')
// res.end()
    }
    if (req.url == '/contact'){
res.write('welcome to our contact page ')
// res.end()
    }


})

server.listen(5000)