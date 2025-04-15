import express from 'express';
import { loginController, signupController,  patientsController, addUserController, sendNotification } from '../controllers/parentsControllers.js';
import tokenVerification from '../middlewares/tokenVerification.js';

const router = express.Router();

router.post('/parent/login', loginController)

router.post('/parent/signup', signupController);

router.post('/parent/add_user', tokenVerification,  addUserController);

router.get('/parent/get_users', tokenVerification, patientsController);

router.post('/parent/send_notification/:email', sendNotification)



export default router;