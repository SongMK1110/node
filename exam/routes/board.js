var express = require("express");
const pool = require("../test/pool");
var router = express.Router();

sql = {
  select: "select * from board",
  insert: "insert into board set ?",
  update: "update board set ? where no=?",
  delete: "delete from board where no = ?",
};

//전체조회
router.get("/", (req, res) => {
  pool.query(sql.select, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});

//등록
router.post("/", (req, res) => {
  pool.query(sql.insert, req.body, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});

//수정
router.put("/:no", (req, res) => {
  let data = [req.body, req.params.no];
  pool.query(sql.update, data, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});
//삭제
router.delete("/:no", (req, res) => {
  pool.query(sql.delete, req.params.no, function (err, results, fields) {
    let resultData = {};
    if (err) {
      console.log(err);
    }
    console.log(results);
    if (results.affectedRows <= 0) {
      resultData.result = false;
    } else {
      resultData.result = true;
    }
    res.send(resultData);
  });
});

module.exports = router;
