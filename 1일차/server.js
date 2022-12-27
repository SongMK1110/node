const http = require("http");
let infoarr = [];
infoarr["kim"] = { name: "김유신", hobby: "게임" };
infoarr["park"] = { name: "박기자", hobby: "독서" };

const server = http.createServer((req, res) => {
  const myurl = new URL("http://127.0.0.1:3000" + req.url);
  console.log(myurl.pathname);
  console.log(myurl.searchParams);
  if (myurl.pathname == "/") {
    res.end("main");
  } else if (myurl.pathname == "/info") {
    //res.statusCode = 200;
    //res.setHeader("content-type", "text/html");
    let userid = myurl.searchParams.get("userid");
    res.end(info(userid));
  } else if (myurl.pathname == "/boardReg") {
    //res.write();
    res.end(boardReg());
  } else if (myurl.pathname == "/userReg") {
    res.end(userReg());
  } else if (myurl.pathname == "/userRegAction") {
    let userid = myurl.searchParams.get("userid");
    let username = myurl.searchParams.get("username");
    let pw = myurl.searchParams.get("pw");
    let hp = myurl.searchParams.get("hp");
    console.log(userid);
    console.log(username);
    console.log(pw);
    console.log(hp);
    res.end("등록완료");
  } else if (myurl.pathname == "/boardRegAction") {
    let title = myurl.searchParams.get("title");
    let content = myurl.searchParams.get("content");
    console.log(title);
    console.log(content);
    res.end("등록완료");
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000, () => {
  console.log("server is running http://127.0.0.1:3000");
});

function info(userid) {
  if (!userid || !infoarr[userid]) {
    return "no user";
  }
  let html = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <h3>my info</h3>
      <div>id: ${userid ? userid : ""}</div>
      <div>이름: ${infoarr[userid].name}</div>
      <div>취미: ${infoarr[userid].hobby}</div>
    </body>
  </html>
  `;
  return html;
}
function boardReg() {
  let boardReg = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <h3>게시글 작성!!!!!!!!!!</h3>
        <form action="/boardRegAction">
          <div>제목<input type="text" name="title" /></div>
          <div>내용<textarea name="content" id="" cols="30" rows="10"></textarea></div>
          <div><button>등록</button></div>
        </form>
      </body>
    </html>
    `;
  return boardReg;
}
function userReg() {
  let userReg = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </head>
    <body>
      <form action="userRegAction">
        <div><input type="text" name="userid" placeholder="아이디" /></div>
        <div><input type="text" name="username" placeholder="이름" /></div>
        <div><input type="password" name="pw" placeholder="비밀번호" /></div>
        <div><input type="tel" name="hp" placeholder="휴대폰" /></div>
        <div><button>회원가입</button></div>
      </form>
    </body>
  </html>
  `;
  return userReg;
}
