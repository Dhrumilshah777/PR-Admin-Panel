const express = require('express');

const port = 9000;

const app = express();

const path = require('path');

app.set('view engine','ejs');

app.use('/',express.static(path.join(__dirname,'public')));

const middleware = (req,res,next) => {
    if(req.query.register = "Yes"){
        return next();
    }
    return res.redirect('/');
}

app.get("/",(req,res) => {
    res.render("index");
})
app.get("/app-calendar",middleware,(req,res) => {
    res.render("app-calendar");
})
app.get("/app-chat",middleware,(req,res) => {
    res.render("app-chat");
})
app.get("/authentication-login1",middleware,(req,res) => {
    res.render("authentication-login1");
})
app.get("/authentication-register1",middleware,(req,res) => {
    res.render("authentication-register1");
})
app.get("/chart-chart-js",middleware,(req,res) => {
    res.render("chart-chart-js");
})
app.get("/form-inputs",middleware,(req,res) => {
    res.render("form-inputs");
})
app.get("/icon-fontawesome",middleware,(req,res) => {
    res.render("icon-fontawesome");
})
app.get("/table-layout-coloured",middleware,(req,res) => {
    res.render("table-layout-coloured");
})
app.get("/ticket-list",middleware,(req,res) => {
    res.render("ticket-list");
})
app.get("/ui-cards",middleware,(req,res) => {
    res.render("ui-cards");
})
app.get("/ui-carousel",middleware,(req,res) => {
    res.render("ui-carousel");
})

app.listen(port, (err) => {
    if(err){
        console.log("Server Not Start on Port...");
    }
    console.log("Server Start on Port http://localhost:9000/");
})