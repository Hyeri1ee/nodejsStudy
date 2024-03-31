// async ... awiat 연습하기  (결과 비교 파일 : 05\results\await.js)

const fs = require("fs").promises;
async function readDirAsync(){
    try{
        const files = await fs.readdir("./");
        console.log(files);
    }catch{
        console.error(err);
    }
}
readDirAsync();