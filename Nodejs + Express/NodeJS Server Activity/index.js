const  http = require('http')
const  fs = require('fs/promises') 
const  PORT = 3000

const  router = async(file, res) => {
    try {
	    file = await  fs.readFile(file)
	    res.setHeader("Content-Type", "text/html")
	    res.writeHead(200)
	    res.end(file)
    } catch (error) {
	    res.writeHead(500); // 5xx means server error!
	    res.end(err); // send the error instead
        // res.write("file not found")
        // res.end()
        // console.log(error)
    } 
}

const  requestListener = (req, res) => {
    if (req.url === '/home' || req.url === '/') {
	    router("./routes/home.html", res)

    }
    else  if (req.url === '/about') { 
	    router("./routes/about.html", res)
    }
    else  if (req.url === '/contacts') { 
	    router("./routes/contacts.html", res) 
    } 
    else {
        router("./routes/404.html")
    }
 
} 

const  server = new  http.Server(requestListener)  
server.listen(PORT, (err) => {  
    if (err) {
	    console.log(err)
	    throw  err;
    }
    console.log(`Server has started on http://localhost:${PORT}!`)
})