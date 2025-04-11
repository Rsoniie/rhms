import express from 'express';
import { loginController, signupController,  patientsController, addUserController } from '../controllers/parentsControllers.js';
import tokenVerification from '../middlewares/tokenVerification.js';

const router = express.Router();

router.post('/parent/login', loginController)

router.post('/parent/signup', signupController);

// router.get('/parent/alert', alertController);

router.post('/parent/add_user', tokenVerification,  addUserController);

router.get('/parent/get_users', tokenVerification, patientsController);



export default router;