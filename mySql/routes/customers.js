var express = require("express");
const pool = require("../test/pool");
var router = express.Router();

//전체조회
router.get("/", (req, res) => {
  sql = "SELECT * FROM customers";
  pool.query(sql, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});

//단건 조회
router.get("/:id", (req, res) => {
  const id = req.params.id;
  sql = "SELECT * FROM customers where id=?";
  pool.query(sql, id, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results[0]);
  });
});

//등록
router.post("/", (req, res) => {
  // let data = req.body;
  let sql = "insert into customers set ?";

  pool.query(sql, req.body, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});

//수정
router.put("/:id", (req, res) => {
  const id = req.params.id;
  let sql = "update customers set ? where id=?";
  pool.query(sql, req.body, id, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
  });
});

//삭제
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  let sql = "delete from customers where id = ?";
  pool.query(sql, id, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.statusCode = 200;
    // res.send("results");
    res.end();
  });
});

module.exports = router;
