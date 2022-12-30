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

sql = "SELECT * FROM customers";
connection.query(sql, function (err, results, fields) {
  //fields는 컬럼 정보
  if (err) {
    throw err;
  }
  console.log(results);
  // console.log(fields);
});

connection.end(); // DB 접속 종료
