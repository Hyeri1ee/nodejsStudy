// Node.js에서 동기 처리하기   (결과 비교 파일 : 05\results\node-sync.js)
const fs = require("fs");

let files = fs.readdirSync("./");
console.log(files);

console.log("Code is done.");