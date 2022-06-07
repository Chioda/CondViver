const express = require('express');

const router = express.Router();
const auth = require('../middlewares/auth');
const userController = require('../controllers/user.controller');

router.post('/register', userController.registerNewUser);

router.post('/login', userController.loginUser);

router.get('/userProfile', auth, userController.returnUserProfile);

router.get('/user', userController.returnUser);

module.exports = router;