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

let sql = "insert into customers set ?";
let data = {
  // id: 2,
  name: "몰라12345",
  email: "abc@gamil.com",
  phone: "010-1234-1234",
  address: "",
};
connection.query(sql, data, function (err, results, fields) {
  if (err) {
    console.log(err);
  }
  console.log(results);
  // connection.query("select last_insert_id()", (err, results, fields) => {
  //   console.log("id:", results);
  // });
});

connection.end(); // DB 접속 종료
