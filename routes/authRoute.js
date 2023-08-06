import express from 'express'
import { loginController, registerController } from '../controllers/authController.js';

//configuring router obj
const router = express.Router();

//routing
//register POST method
router.post('/register', registerController);

//login
router.post('/login', loginController)

export default router
