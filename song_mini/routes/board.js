const express = require("express");
const pool = require("../mysql/pool");
const router = express.Router();

const sql = {
  select: "select * from board",
  selectOne: "SELECT * FROM board where no=?",
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

router.post("/", (req, res) => {
  // req.body.username =
  pool.query(sql.insert, req.body, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  pool.query(sql.selectOne, id, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results[0]);
  });
});
module.exports = router;
