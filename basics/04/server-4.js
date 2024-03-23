// HTML 페이지 서빙하기  (결과 비교 파일 : 04\results\server-4.js)

const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res) => {
    res.setHeader("Content-Type","text/html");
    const readStream = fs.createReadStream(__dirname + "/index.html","utf8");
    readStream.pipe(res);
});

server.listen(3000,()=>{
    console.log("3000번 포트에서 서버 실행 중");
});