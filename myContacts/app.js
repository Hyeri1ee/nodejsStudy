const express = require("express");
//const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200);
  res.send("Hello Node!");
});

// 모든 연락처 가져오기
app.get("/contacts", (req, res) => {
    res.status(200).send("Contacts Page");
    //res.sendFile(__dirname + "/assets/contacts.html");
});

// 새 연락처 추가하기
app.post("/contacts", (req, res) => {
    res.status(201).send("Create Contacts"); 
}); 

// 연락처 상세 보기
app.get("/contacts/:id", (req, res) => {
    res.status(200).send(`View Contacts for ID: ${req.params.id}`);
}); 

// 연락처 수정하기
app.put("/contacts/:id", (req, res) => {
    res.status(200).send(`Update Contacts for ID: ${req.params.id}`);
}); 

// 연락처 삭제하기
app.delete("/contacts/:id", (req, res) => {
    res.status(200).send(`Delete Contacts for ID: ${req.params.id}`);
});
app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});