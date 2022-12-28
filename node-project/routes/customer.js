import { Router } from "express";
const route = Router();

route
  .get("/", (req, res) => {
    res.send("customer get");
  })
  .post("/", (req, res) => {
    res.send("customer post");
  })
  .put("/", (req, res) => {
    res.send("customer put");
  })
  .delete("/", (req, res) => {
    res.send("customer delete");
  });

export default route;
