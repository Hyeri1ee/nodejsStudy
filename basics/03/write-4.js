// fs 모듈 writeFile 함수의 flag 옵션 연습하기 (결과 비교 파일은 03\results\write-4.js)

const fs = require("fs");

let content = `======= 새로운 내용`;
fs.writeFileSync("./text-1.txt",content, {flag : "a"});