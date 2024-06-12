import expres from 'express'
import {getCurrentUser, loginUser, registerUser } from '../controllers/UserControllers';
import { authenticate } from '../middlewares/authenticate';

const router=expres.Router();

router.post('/register',registerUser)
router.post('/login',authenticate,loginUser)
router.get('/users/me',authenticate,getCurrentUser)


export default router