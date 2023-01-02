const express = require("express");
const router = express.Router();
const pool = require("../mysql/pool");

router.get("/", (req, res) => {
  const sql = "select * from customers";
  pool.query(sql, (err, result) => {
    res.render("customer", { list: result });
  });
});
module.exports = router;
