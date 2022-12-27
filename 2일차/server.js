const http = require("http"); // http.js  http 객체선언
const fs = require("fs");
// 서버 선언(클라이언트 요청 시 호출(처리)될 핸들러
const server = http.createServer((req, res) => {
  const myurl = new URL("http://localhost:3000" + req.url);
  console.log("pathname", myurl.pathname);
  console.log("serchparam", myurl.searchParams);
  if (myurl.pathname.startsWith("/page")) {
    const pagename = "./template" + myurl.pathname.substring(5) + ".html";
    fs.readFile(pagename, "utf8", (err, data) => {
      //(err = 에러, data = readfile 읽어낸 데이터)
      res.end(data);
    });
  } else {
    res.end("no path");
  }
});
server.listen(3000, () => {
  console.log("server running http://localhost:3000");
});
