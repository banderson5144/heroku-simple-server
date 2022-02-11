var http = require('http');

const PORT = process.env.PORT || 5000;

const server = http.createServer(async (req, res) => {
    
    //response headers
    res.writeHead(200, { "Content-Type": "text/plain" });
    //set the response
    res.write(`The path is ${req.url}`);
    //end the response
    res.end();
});

server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});