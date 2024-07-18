const express = require('express');


const router = express.Router();

const userSignUpController = require('../controller/userSignUp');
const userSigninController = require('../controller/userSignin');

router.post('/signup', userSignUpController);
router.post('signin', userSigninController)

module.exports = router;