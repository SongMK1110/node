const express = require("express");
const pool = require("../mysql/pool");
const router = express.Router();

sql = {
  select: "select * from board",
  insert: "insert into board set ?",
  update: "update board set ? where no=?",
  delete: "delete from board where no = ?",
};

router.get("/", (req, res) => {
  pool.query(sql.select, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results); // res.json() => string으로 바꿔서 전송
  });
});

module.exports = router;
