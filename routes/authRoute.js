import express from 'express'
import { loginController, mainProvider, registerController } from '../controllers/authController.js';
import { requireSignIn } from '../middlewares/authmiddleware.js';

//configuring router obj
const router = express.Router();

//routing
//register POST method
router.post('/register', registerController);

//login
router.post('/login', loginController)

//main provider
router.get('/main-provider/:id',requireSignIn, mainProvider)


//protected user route 
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({
        ok: true
    })
})

export default router
