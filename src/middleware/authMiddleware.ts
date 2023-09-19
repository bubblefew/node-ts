//// this file for auth middleware
import { Request, Response, NextFunction } from 'express'

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers.authorization
  if (!authorization) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
  const token = authorization.split(' ').at(1)
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
  next()
}
