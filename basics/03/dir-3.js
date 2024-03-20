// 빈 디렉터리 삭제하기 - rmdir 함수 (결과 비교 파일 : 03\results\dir-3.js)

const fs = require("fs");

if (fs.existsSync("./test")){
    fs.rmdir("./test",(err)=>{
        if (err){
            console.error(err);
        }else{
            console.log("folder deleted");
        }
    });
}else{
    console.log("folder does not exist");
}