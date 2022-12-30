var express = require("express");
const pool = require("../test/pool");
var router = express.Router();

sql = {
  select: "select * from books order by title",
  selectOne: "select * from books where no = ?",
  insert: "insert into books set ?",
  update: "update books set ? where no=?",
  delete: "delete from books where no = ?",
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

//단건조회
router.get("/:no", (req, res) => {
  pool.query(sql.selectOne, req.params.no, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results[0]);
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
    if (err) {
      console.log(err);
    }
    res.send("result");
  });
});

module.exports = router;
