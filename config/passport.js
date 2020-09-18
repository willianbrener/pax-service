var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var autenticacaoController = require('../controllers/AutenticacaoController');



passport.use(new LocalStrategy({
    usernameField: 'email'
  },
  function(username, password, done) {
    console.info(username);
    console.info(password);
    console.info(done);
    let filter = '';
    if(req.params.id) filter = ' WHERE nome_usuario=' + username;

    db.query(`SELECT * FROM usuario` + filter, function(error, result, fields){

        if (error) { return done(error); }

        // Return if user not found in database
        if (!result) {
            return done(null, false, {
            message: 'User not found'
            });
        }

        // Return if password is wrong
        if (!autenticacaoController.validPassword(password)) {
            return done(null, false, {
            message: 'Password is wrong'
            });
        }

        // If credentials are correct, return the user object
        return done(null, result);
    });

  }
));