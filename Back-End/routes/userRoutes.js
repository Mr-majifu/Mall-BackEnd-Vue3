import { Router } from 'express';
import {login, register, putPassword} from '../controllers/userController.js'

const router = Router();

router.post('/login', (req, res) => {
  login(res, req.body)
})

router.post('/register', (req, res) => {
  register(res, req.body)
})

router.post('/putPassword', (req, res) => {
  putPassword(res, req.body)
})

export default router;