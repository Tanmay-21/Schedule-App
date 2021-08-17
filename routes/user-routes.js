const express = require('express');
const passport = require('passport');

const userControllers = require('../controllers/user-controllers');

const router = express.Router();

router.get('/', userControllers.getUsers);

router.get('/auth/google', 
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

router.get('/current_user', (req, res, next) => {
  res.json({ user: req.user });
});

router.get('/auth/logout', (req, res, next) => {
  req.logOut();
  res.json({ user: req.user });
});

router.get(
  '/auth/google/callback',
  passport.authenticate('google'),
  (req, res, next) => {
    res.redirect('http://localhost:3000/');
  }
);

module.exports = router;