const passport = require('passport');
var GitlabStrategy = require('passport-gitlab2').Strategy;
const keys = require('./config/keys')

passport.serializeUser((profile, done) => {
    done(null, profile);
})

passport.deserializeUser((profile, done) => {
    done(null, profile);
})

passport.use(new GitlabStrategy({
    clientID: keys.googleKeys.clientID,
    clientSecret: keys.googleKeys.clientSecret,
    callbackURL: "http://localhost:5000/auth/gitlab"
},
    function (token, tokenSecret, profile, done) {
    
        done(null, profile);

    }
));

