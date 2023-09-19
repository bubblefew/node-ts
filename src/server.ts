import express, { NextFunction, Request, Response } from 'express'
import authRouter from './routes/authRouter'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import { authMiddleware } from './middleware/authMiddleware'
import { Error } from './models/Error'
import { server } from './settings/config'

const app = express()

const port = server.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('combined'))
app.use(cors())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))

app.use('/auth', authMiddleware, authRouter)
app.use('/api/images', express.static('./src/public/images'))

app.use('/api/images', (req: Request, res: Response, next: NextFunction) => {
  const error: Error = {
    status: 404,
    message: 'Not found',
  }
  next(error)
})

app.get('/', (req: Request, res: Response) => {
  res.json(`Server started on port ${port}`)
})
app.listen(port, () => console.log(`Server started on port ${port}`))

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  res.status(error.status || 500).json({
    error: {
      status: error.status || 500,
      message: error.message || 'Internal Server Error',
    },
  })
})
