// 블로킹 I/O  (결과 비교 파일 : 05\results\blocking-1.js)

const fs = require("fs");

const data = fs.realpathSync("example.txt"); //블로킹
console.log(data);
console.log("코드 끝!");