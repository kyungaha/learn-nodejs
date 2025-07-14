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

    const add = (a, b)=> {
        // 화살표함수
        return a+b;
    };

    const minus = (a, b) => {
        return a-b;
    };

    const introduce = (name, age) => {
     return '안녕하세요, ' + name + '님. 당신의 나이는 ' + age + '세입니다.';
    };

    const orderSandwich = (a) => {
        if(a==='basic') {
            return a +" = 빵+상추+토마토+치즈+베이컨";
        } else if (a==='vegan') {
            return a + " = 빵+상추+토마토+아보카도+오이";
        } else {
            return a + " = 빵+상추+토마토+치즈+베이컨";
        }
    }

    for(let i = 5; i >= 1; i--) {
      console.log("예상 출력: " + i);
    }

    const numbers = [1, 2, 3, 4, 5];
    const incrementedNumbers = numbers.map(number => number +1 );   // 여기에 코드를 작성하세요.
    console.log(incrementedNumbers); // 예상 결과: [2, 3, 4, 5, 6]

    const Numbers = [1, 2, 3, 4, 5, 6];
    const evenNumbers = Numbers.filter(Numbers => Numbers % 2 === 0);// 여기에 코드를 작성하세요.
    console.log(evenNumbers); // 예상 결과: [2, 4, 6]

    // 학생들의 정보가 담긴 배열
    const students = [
    { name: "Alice", age: 22, major: "Computer Science" },
    { name: "Bob", age: 21, major: "Mathematics" },
    { name: "Charlie", age: 23, major: "Physics" },
    { name: "David", age: 20, major: "Chemistry" },
    { name: "Eva", age: 22, major: "Biology" }
    ];

    // 1. 전공이 "Physics"인 학생을 찾으세요.
    const physicsStudent = students.find(students => students.major==="Physics");// 여기에 코드를 작성하세요.

    console.log("전공이 Physics인 학생:", physicsStudent); // 예상 결과: { name: "Charlie", age: 23, major: "Physics" },

    // 2. 이름이 "David"인 학생을 찾으세요.
    const davidStudent =students.find(students => students.name==="David");// 여기에 코드를 작성하세요.

    console.log("이름이 David인 학생:", davidStudent); // 예상 결과:{ name: "David", age: 20, major: "Chemistry" },
    

    console.log(add(5,3));
    console.log(minus(60,20));
    console.log(introduce("경아", "34"));

    console.log("기본 샌드위치 주문: " + orderSandwich());
    console.log("기본 샌드위치 주문: " + orderSandwich('basic'));
    console.log("비건 샌드위치 주문: " + orderSandwich('vegan'))
    

server.listen(8080, () => {
    console.log("server on");
    console.log("🚀 ~ server ~ __dirname:", __dirname)
});

// index.html, about.html, contact.html
