const answer = `3000번 포트에 서버가 열린다. 응답내용을 HTML태그까지 모두 보여주며  "Hello world"를 출력하고 응답을 마무리한다.
`;

const http = require("http");
http.createServer((req, res) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end("Hello World\n");
}).listen(3000);
console.log(answer);