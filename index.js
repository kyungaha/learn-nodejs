const http = require("http");
const fs = require('fs'); // 파일시스템 모듈(html파일 읽기 위함)
const path = require('path'); // 경로처리를 위한 모듈

// 서버 생성 및 요청 처리
const server = http.createServer((req, res) => {
    //logic..
    // req : request로 프론트엔드로부터 받은 데이터
    // res : response로 프론트엔드에게 전달하는 응답 값
    // res.statusCode = 200; // ok 상태코드
    // res.setHeader("Content-Type", "text/plain"); // 응답 헤더
    // res.end("kong"); // 클라이언트에게 응답할 데이터
    
    // GET, POST, PUT, DELETE
    if(req.method === "GET") {
        // 조건식이 true 인 경우 실행
        if(req.url === '/') {
            // index.html 응답
            fs.readFile(
                path.join(__dirname, "index.html"), //__dirname : 현재 경로를 알려주는 값
                'utf-8', 
                (err, data) => {
                    if(err) {
                        res.statusCode = 500;
                        res.end("ERROR!");
                    } else {
                        res.statusCode = 200;
                        res.setHeader("Content-Type", "text/html");
                        res.end(data); // html 파일 반환
                    }
            }); 
        } else if(req.url === "/about") {
            // about.html 응답
            fs.readFile(
                path.join(__dirname, "about.html"),
                'utf-8',
                (err,data) => {
                    if(err) {
                        res.statusCode = 500;
                        res.end("ERROR@");
                    } else {
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'text/html');
                        res.end(data);
                    }
                }
            )
        } else {
            // contact.html 응답
            fs.readFile(
                path.join(__dirname, "contact.html"),
                'utf-8',
                (err,data) => {
                    if(err) {
                        res.statusCode = 500;
                        res.end("ERROR#");
                    } else {
                        res.statusCode = 200;
                        res.setHeader('Content-Type', "text/html");
                        res.end(data);
                    }
                }
            )
        }
    }

});

server.listen(8080, () => {
    console.log("server on");
    console.log("🚀 ~ server ~ __dirname:", __dirname)
});

// index.html, about.html, contact.html
