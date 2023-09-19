import { Request, Response } from 'express'
import { User } from '../models/User'

const authController = {
  login: (req: Request, res: Response) => {
    try {
      const { username, password }: User = req.body
      if (!username || !password) {
        res.status(400).json({ status: 'fail', message: 'username or password is required' })
      }
      res.json({ status: 'success', data: { username, password } })
    } catch (error: string | any) {
      res.status(500).send({ message: error.message })
    }
  },
  register: (req: Request, res: Response) => {
    try {
      const { username, password }: User = req.body
      res.json({ message: 'register', username, password })
    } catch (error: string | any) {
      res.json({ message: error.message })
    }
  },
}

export default authController
