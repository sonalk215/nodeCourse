const http=require('http');

const server=http.createServer((req, res)=> {
    console.log(req);
    // console.log(res);
    // process.exit();
})

server.listen(3000);

