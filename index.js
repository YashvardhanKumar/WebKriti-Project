const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const database = require('./Models/DeYaKuSchema');
let incorrect = false;

let details = require('./views/Details.json');
app.use(express.static(path.join(__dirname, 'CSS')))
app.use(express.static(path.join(__dirname, 'signup')))
app.use(express.static(path.join(__dirname, 'home')))
app.use(express.static(path.join(__dirname, 'images')))
app.use(express.json()) //middleware
app.use(express.urlencoded({ extended:true}))
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, '/views'))
app.get('/login', function (req, res) {
    res.render('login',{details})
})
app.post('/login', function (req, res, next) {
    res.send("Welcome")
    console.log(req.body)
})
app.get('/signup', function (req, res) {
    if(incorrect){
        res.render('signup',{error:incorrect})
    }
    res.render('signup')
})
app.post('/signup', function (req, res, next) {
    // res.send("Welcome")
    console.log(req.body)
    if (req.body.loginPassword !== req.body.confirmPassword) {
        // alert('Incorrect Password')
        incorrect = true
        res.redirect('signup')
    }
    else{

        res.render('login')
    }

})
app.get('/', function (req, res) {
    res.render('index.ejs')
})
app.get('/support', function (req, res) {
    res.render('support')
    res.send(`<h1>This page is under development<h1>`)
})
app.get('/contactus', function (req, res) {
    res.render('contactus')
    res.send(`<h1>This page is under development<h1>`)
})
app.get('/:id/feed',(req, res) => {
    const {id} = req.params
    res.render('feed',{id})
})
app.get('/:id/postId/:id/edit',(req, res) => {
    const {id} = req.params
    res.render('feed',{id})
})
app.post('/search-user',(req, res) => {
    const {id} = req.params
    // res.render('feed',{id})
    console.log(req.body)
    res.render('search',{id})
})
app.listen(80)