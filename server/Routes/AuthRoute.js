import express from 'express'
import { login, register } from '../Controller/AuthController.js'

const router = express.Router()

router.post('/register', register)

export default router
