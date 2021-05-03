const express = require("express");
const app = express();

const fetch = require("node-fetch");
const headers = {
  Authorization:
    "Bearer X0vjEUN6KRlxbp2DoUkyHeM0VOmxY91rA6BbU5j3Xu6wDodwS0McmilLPBWDUcJ1",
};

app.get("/icons", function (req, res) {
  const { count = 10 } = req.query; // 1 - 100
  const url = "https://api.iconfinder.com/v4/iconsets?count=" + count;
  const options = {
    method: "GET",
    headers,
  };
  fetch(url, options)
    .then((res) => res.json())
    .then((json) => res.send(json))
    .catch((err) => res.sendStatus(500) && console.log("error:" + err));
});

app.get("/icons/:id", function (req, res) {
  const { id } = req.params;
  const url = "https://api.iconfinder.com/v4/iconsets/" + id;
  const options = {
    method: "GET",
    headers,
  };
  fetch(url, options)
    .then((res) => res.json())
    .then((json) => res.send(json))
    .catch((err) => res.sendStatus(500) && console.log("error:" + err));
});

app.get("/categories", function (req, res) {
  const { count = 10 } = req.query; // 1 - 100
  const url = "https://api.iconfinder.com/v4/categories?count=" + count;
  const options = {
    method: "GET",
    headers,
  };
  fetch(url, options)
    .then((res) => res.json())
    .then((json) => res.send(json))
    .catch((err) => res.sendStatus(500) && console.log("error:" + err));
});

app.get("/styles", function (req, res) {
  const { count = 10 } = req.query; // 1 - 100
  const url = "https://api.iconfinder.com/v4/styles?count=" + count;
  const options = {
    method: "GET",
    headers,
  };
  fetch(url, options)
    .then((res) => res.json())
    .then((json) => res.send(json))
    .catch((err) => res.sendStatus(500) && console.log("error:" + err));
});

const server = app.listen(2701, function () {
  const port = server.address().port;
  console.log("Icon Finder listening at http://localhost:%s", port);
});