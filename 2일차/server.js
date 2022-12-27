const http = require("http"); // http.js  http 객체선언
// 서버 선언(클라이언트 요청 시 호출(처리)될 핸들러
const server = http.createServer((req, res) => {
  const myurl = new URL("http://localhost:3000" + req.url);
  console.log("pathname", myurl.pathname);
  console.log("serchparam", myurl.searchParams);
  res.end("hello");
});
server.listen(3000, () => {
  console.log("server running http://localhost:3000");
});
