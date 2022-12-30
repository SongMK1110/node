const mysql = require("mysql"); //mysql 모듈 로드

//mysql 접속 정보
const conn = {
  host: "localhost",
  port: "3306",
  user: "dev01",
  password: "1234",
  database: "dev",
  connectionLimit: 10,
};
let pool = mysql.createPool(conn);

// let connection = mysql.createConnection(conn); //DB 커넥션 생성
// connection.connect(); // DB 접속

sql = "SELECT * FROM customers";
pool.query(sql, function (err, results, fields) {
  if (err) {
    console.log(err);
  }
  console.log(results);
});
// pool.release()
// connection.end(); // DB 접속 종료
