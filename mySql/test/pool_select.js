const pool = require("./pool"); //mysql 모듈 로드

sql = "SELECT * FROM customers";
pool.query(sql, function (err, results, fields) {
  if (err) {
    console.log(err);
  }
  console.log(results);
});
