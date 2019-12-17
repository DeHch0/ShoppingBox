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
                res.send({result: true}).end();
            return
            }
        }
        console.log('not Admin');
        res.send({result: false}).end();
            return
    })
    .catch(err => {
        res.send({result: err}).end();
    })

}

function login(req, res) {
    const { username, password } = req.body;

    models.Users.findOne({ username })
    .then((user) => !!user ? Promise.all([user, user.matchPassword(password)]) : [null, false])
    .then(([user, match]) => {
      if (!match) {
        res.status(401).send('Invalid username or password');
        return;
      }
                const token = jwt.createToken({ id: user._id });

                res
                    .cookie('auth_cookie', token, { httpOnly: false })
                    .cookie('username', user.username)
                    .send({success: 'Logged in successffully !'})
                    .end();
      
    }).catch(err => {
        res.send(err).end();
    })
        
}

function register(req, res) {
    const { username, email, password, repeatPassword } = req.body;
    const admin = false;
    return models.Users.create({ username, email, password, orders: [], balance: 0 , admin}).then(() => {
        console.log('REGISTERED SUCCESSFULLY ! ****');
        res.end();
        return
    }).catch(err => {
        let field = Object.keys(err.keyValue)[0];
        if (err.name === 'MongoError' && err.code === 11000) {
            console.log(`${field} is taken !`);
            res
            .send({error:`${field} is taken !`})
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

function getAll(req, res) {
    models.Users.find({})
    .then(users => {
        res.send(users).end()
    })
    .catch(e => {
        res.send({error: 'Error due getting all users'}).end();
    })
}

function getOne(req, res) {
    let { id } = req.params;

    models.Users.findById(id).then(profile => {
        res.send(profile).end();
      
    }).catch(err => {
        res.send({error: err})
    })
}

function remove(req, res) {
    let {id} = req.params;

    models.Users.findByIdAndRemove(id)
    .then(data => {
        res.send({succes: `User ${data.username} was deleted successfully ! `})
    })
    .catch(err => {
        res.send({error: err}).end();
    })
}

function edit(req, res) {
    console.log('in edit func *****');
    let editObj = {
        username: req.body.username,
        email: req.body.email,
        admin: req.body.admin,
    };

    console.log(editObj);

    models.Users.findByIdAndUpdate(req.body.userId, editObj)
    .then(data => res.send({success: `User ${req.body.username} edited successfully !`}))
    .catch(err => {console.log('edited')})
}

module.exports = {
    // auth,
    isAdmin,
    login,
    register,
    logout,
    getOne,
    getAll,
    remove,
    edit
};