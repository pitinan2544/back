const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const authController = require('../controllers/auth-controller')

router.post("/register",authController.registerUser)
router.post("/login",authController.login)
router.get("/me",authenticate,authController.getme) //project route

module.exports = router
