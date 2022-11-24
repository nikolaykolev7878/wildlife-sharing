const { isUser, isGuest } = require('../middleware/guards');
const { register, login } = require('../services/user');
const { mapErrorrs } = require('../util/mappers');

const router = require('express').Router();





router.get('/register', isGuest(), (req, res) => {
    res.render('register', { title: 'Register Page' });
});





router.post('/register', isGuest(), async (req, res) => {
    try {
        if (req.body.password.trim() == '') {
            throw new Error('Passwords is required!');
        } else if (req.body.password != req.body.repass) {
            throw new Error('Passwords don\'t match');
        }

        const user = await register(req.body.firstName, req.body.lastName, req.body.email, req.body.password);
        req.session.user = user;
        res.redirect('/'); 
    } catch (err) {
        console.error(err)

        
        const errors = mapErrorrs(err)
        const data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        };
        res.render('register', { title: 'Register Page', data, errors });
    }
});

router.get('/login', isGuest(), (req, res) => {
    res.render('login', { title: 'Login Page' });
});


router.post('/login', isGuest(), async (req, res) => {
    try {
        const user = await login(req.body.email, req.body.password);
        req.session.user = user;
        res.redirect('/');  
    } catch (err) {
        console.error(err)

        
        const errors = mapErrorrs(err)
        res.render('login', { title: 'Login Page', data: { email: req.body.email }, errors });

    }
})

router.get('/logout', isUser(), (req, res) => {
    delete req.session.user;
    res.redirect('/');
});


module.exports = router