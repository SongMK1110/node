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

// 조회
router.get("/", (req, res) => {
  pool.query(sql.select, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});

// 게시판에 유저 정보
router.get("/user", (req, res) => {
  res.json(req.session.username);
});

// 글 작성
router.post("/", (req, res) => {
  // console.log(req.body);
  req.body.username = req.session.username;
  pool.query(sql.insert, req.body, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});

// 글 상세정보
router.get("/:no", (req, res) => {
  const session_username = req.session.username;
  const no = req.params.no;
  pool.query(sql.selectOne, no, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    results[0].test = session_username;
    console.log(results);
    res.json(results[0]);
  });
});

//글 수정
router.put("/:no", (req, res) => {
  let data = [req.body, req.params.no];
  pool.query(sql.update, data, function (err, results, fields) {
    let resultData = {};
    if (err) {
      console.log(err);
      throw err;
    }
    if (results.changedRows > 0) {
      resultData.result = true;
      resultData.data = req.body;
    } else {
      resultData.result = false;
    }
    res.send(resultData);
    // res.json(results);
  });
});

//글 삭제
router.delete("/:no", (req, res) => {
  const no = req.params.no;
  pool.query(sql.delete, no, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.statusCode = 200;
    // res.send("results");
    res.end();
  });
});

module.exports = router;
