const path = require("path");
const express = require("express");
const ejs = require("ejs");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
// 都道府県情報を取得
const prefectures = require("./prefectures.json");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const mysql = require("mysql2");

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "personas",
});
// 静的ファイルの取り出しに必要
app.use(express.static("assets"));

// mysqlからデータを持ってくる
app.get("/", (req, res) => {
    const sql = "select * from personas";
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.render("index", {
            personas: result,
        });
    });
});

// // 検索
// app.post("/search", (req, res) => {
//     // 検索ワードの取得(%はワイルドカード)
//     const search = "%" + req.body.search + "%";
//     let sql = ""
//     // 検索語句が空だったら全ての情報取得
//     if(search === "") sql = "select * from personas";
//     else sql = "select * from personas where name LIKE ?";
//     con.query(sql, search, function (err, result, fields) {
//         if (err) throw err;
//         // 取得出来たらトップに戻る
//         res.render("index", {
//             personas: result,
//         });
//     });
// });

app.get("/edit/:id", (req, res) => {
    const sql = "SELECT * FROM personas WHERE id = ?";
    con.query(sql, [req.params.id], function (err, result, fields) {
        if (err) throw err;
        res.render("edit", {
            personas: result,
            prefectures: prefectures,
        });
    });
});

app.post("/", (req, res) => {
    const sql = "INSERT INTO personas SET ?";
    con.query(sql, req.body, function (err, result, fields) {
        console.log(req.body);
        if (err) throw err;
        res.redirect("/");
    });
});

app.get("/create", (req, res) => {
    res.render("form", {
        prefectures: prefectures,
    });
});

app.post("/update/:id", (req, res) => {
    const sql = "UPDATE personas SET ? WHERE id = " + req.params.id;
    con.query(sql, req.body, function (err, result, fields) {
        console.log(req.body);
        if (err) throw err;
        res.redirect("/");
    });
});

app.get("/delete/:id", (req, res) => {
    const sql = "DELETE FROM personas WHERE id = ?";
    con.query(sql, [req.params.id], function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.redirect("/");
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
