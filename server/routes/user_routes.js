const { Router } = require('express');
const userController = require('../controllers/user_controller');
const router = Router();

const verifyJWT = require("../Middleware/VerifyJWT");

router.get("/getUserData", userController.getUserData);

router.put("/deleteUser",verifyJWT.authorize([2]), userController.deleteUser);

router.post("/Signup", userController.registerUser);

router.post("/Login", userController.loginUser);

router.put("/Update", verifyJWT.authorize([1]),userController.updatepassword);

router.post('/sendEmail', userController.sendEmail);

router.post('/verificationCode', userController.verificationCode);

router.get('/getUserId/:id', userController.getUserId);

router.put('/updateUserData/:id',verifyJWT.authorize([1]), userController.updateUserData);

module.exports = router;