const app = require('express')();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const jwt = require('../helpers/jwt')
const auth = require('../helpers/auth.js')
// const auth = require('../helpers/auth.js')

const models = require('../models/');

app.use(cookieParser());

app.use(bodyParser.urlencoded(true));


function isAdmin(req, res) {
    let username = req.params.token;

    models.Users.findOne({username})
    .then(data => {
        if(data !== null) {

            if(data.admin === true) {
                console.log('is Admin');
                res.send({result: true}).end();
            return
            }
        }
        res.send({result: false}).end();
            return
    })
    .catch(err => {
        res.send({result: err}).end();
    })

}

function login(req, res) {
    const { username, password } = req.body;
    // console.log(username);

    if (username == '' || password == '') {
        res.send(`Username/Password can't be empty !`);
        return
    }


    models.Users.findOne({ username })
    .then((user) => !!user ? Promise.all([user, user.matchPassword(password)]) : [null, false])
    .then(([user, match]) => {
      if (!match) {
        //   console.log('Invalid username or Password ! ');
        res.status(401).send({error: 'Invalid username or password'});
        return;
      }
                const token = jwt.createToken({ id: user._id });

                res
                    .cookie('auth_cookie', token, { httpOnly: false })
                    .cookie('username', user.username)
                    .send({success: 'Logged in successffully !'})
                    .end();

    }); 
        
}

function register(req, res) {
    const { username, email, password, repeatPassword } = req.body;
    const admin = false;
    return models.Users.create({ username, email, password, orders: [], balance: 0 , admin}).then(() => {
        console.log('REGISTERED SUCCESSFULLY ! ****');
        res.end();
        return
    }).catch(err => {
        if (err.name === 'MongoError' && err.code === 11000) {
            console.log('Username is taken !');
            res
            .send('Username is taken !')
            .end();
            return
        }

        console.log(err);
        return
    });

}


function logout(req, res) {
    console.log('logout');
    res.clearCookie('auth_cookie')
        .clearCookie('username')
        .send('Loggout Successfully !')
        .end();

}

function getProfile(req, res) {
    let { id } = req.params;

    models.userSchema.findById(id).populate('expences').then(profile => {

        let exp = profile.expences;
        let totalExpences = 0;
        exp.forEach(element => {
            totalExpences += element.total;
        });

        let available = profile.amount - totalExpences;

        console.log(available)

        res.render('profile', { layout: 'profile', profile, available })
    }).catch(e => {
        console.log('error due profile get');
        console.log(e);
    })
}

module.exports = {
    // auth,
    isAdmin,
    login,
    register,
    logout,
    getProfile,
};