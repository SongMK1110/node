const express = require("express");
const pool = require("../mysql/pool");
const router = express.Router();

const sql = {
  select: "select * from sign",
  selectOne: "SELECT * FROM sign where id=?",
  insert: "insert into sign set ?",
  update: "update sign set ? where id=?",
  delete: "delete from sign where id = ?",
  login: "SELECT * FROM sign WHERE username = ? AND password = ?",
};

router.post("/sign", (req, res) => {
  pool.query(sql.insert, req.body, function (err, results, fields) {
    if (err) {
      console.log(err);
    }
    res.json(results);
  });
});
router.post("/login", (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  if (username && password) {
    // id와 pw가 입력되었는지 확인

    pool.query(
      sql.login,
      [username, password],
      function (error, results, fields) {
        if (error) throw error;
        if (results.length > 0) {
          // db에서의 반환값이 있으면 로그인 성공
          req.session.is_logined = true; // 세션 정보 갱신
          req.session.username = username;
          req.session.save(function () {
            res.send(`<script type="text/javascript">alert("로그인 완료"); 
                document.location.href="/board.html";</script>`);
            // res.redirect(`../board.html`);
          });
        } else {
          res.send(`<script type="text/javascript">alert("로그인 정보가 일치하지 않습니다."); 
                document.location.href="/login.html";</script>`);
        }
      }
    );
  } else {
    res.send(`<script type="text/javascript">alert("아이디와 비밀번호를 입력하세요!"); 
        document.location.href="/login.html";</script>`);
  }
});

router.get("/logout", function (req, res) {
  req.session.destroy(function (err) {
    res.redirect("/");
  });
});
module.exports = router;