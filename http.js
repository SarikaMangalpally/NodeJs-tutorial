const http = require('http')

const server = http.createServer((request, response)=>{
    // console.log(request)
    if(request.url == '/') {
        response.write('Welcome to home page')
        response.end()
    } else if(request.url == '/about') {
        response.write('This is about page ')
        response.end()
    }
    else {
        response.end(
            `<p>Sorry! you are on wrong path.</p>
            <a href="/">back home</a>
            `
        )
    }
})

server.listen(5500)