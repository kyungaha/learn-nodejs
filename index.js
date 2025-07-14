const http = require("http");

// 서버 생성 및 요청 처리
const server = http.createServer((req, res) => {
    //logic..
    // req : request로 프론트엔드로부터 받은 데이터
    // res : response로 프론트엔드에게 전달하는 응답 값
    res.statusCode = 200; // ok 상태코드
    res.setHeader("Content-Type", "text/plain"); // 응답 헤더
    res.end("kong"); // 클라이언트에게 응답할 데이터
});

server.listen(8080, () => {
    console.log("server on");
});
