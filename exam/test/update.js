const mysql = require("mysql"); //mysql 모듈 로드

//mysql 접속 정보
const conn = {
  host: "localhost",
  port: "3306",
  user: "dev01",
  password: "1234",
  database: "dev",
};

let connection = mysql.createConnection(conn); //DB 커넥션 생성
connection.connect(); // DB 접속

let sql = "update customers set ? where id=?";
let data = [
  {
    email: "뭐고@naver.com",
    name: "김뭐고",
    phone: "010-0000-4321",
    address: "부산",
  },
  4,
];
// let sql = "update customers set email=?, name=? where id=?";
// let data = ["abc@abc", "kim", 4];
connection.query(sql, data, function (err, results, fields) {
  if (err) {
    console.log(err);
  }
  console.log(results);
});

connection.end(); // DB 접속 종료
