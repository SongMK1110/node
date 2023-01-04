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
function query(sql, data = null) {
  return new Promise((resolve, reject) => {
    pool.query(sql, data, (err, results, fields) => {
      resolve(results);
    });
  });
}
module.exports = { pool, query };
