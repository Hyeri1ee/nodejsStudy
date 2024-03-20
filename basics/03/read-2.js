// fs 모듈 readFileSync 함수의 인코딩 옵션 연습하기 ( 결과 비교 파일 : 03\results\read-2.js)

const fs = require("fs");

const data = fs.readFileSync("./example.txt","utf8");
console.log(data);