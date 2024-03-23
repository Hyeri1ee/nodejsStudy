// 콜백 함수를 사용해 비동기 처리하기  (결과 비교 파일 : 05\results\async-3.js)
const fs = require("node:fs");

fs.readdir("./",(err,files) => {
    if (err){
        console.error(err);
    }
    console.log(files);
});

console.log("Code is done.");