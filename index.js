const http = require("http");
const fs = require("fs/promises");
const host = "localhost";
const port = 8000;
const server = http.createServer(requestListener)
 
let currentDate = new Date(Date.now());
async function  requestListener   (request,response)  {
    
    await fs.appendFile("request.txt", `\n${request.url} -- ${currentDate.getHours().toString()}`);
    response.end("captured");
}

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

