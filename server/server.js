const express = require('express');
const app = express();
const passportSetup = require('./passport');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
const passport = require('passport');
const port = process.env.PORT || 5000;
const { spawn } = require('child_process');
const path = require('path');
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, './build')));
// app.use(express.static(path.join(__dirname, '/static')));
const server = app.listen(port, () => {
    console.log(`listening on port ${process.env.HPORT}`);
});

app.get("/auth", passport.authenticate('gitlab'));

app.get("/auth/gitlab", passport.authenticate('gitlab'), (req, res) => {
    console.log("now reached here",req)
    const authCode = req.query.code;
    res.redirect(`/#/newApp?token=`+authCode);
})

app.post("/deploy", (req, res) => {
    const body = req.body;
    const url = Object.keys(body)[0];
    console.log(url);
    const ls = spawn("git", ['clone', url]);
    ls.stdout.on("data", (data) => console.log("data", data.toString('utf-8')));
    ls.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
    });
    ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
    res.json(url);
})


app.get("/apps", (req, res) => {
    res.send("view all existing apps")
})