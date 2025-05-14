import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './utils/db.js'
import cors from 'cors'
import { router } from './router/jobRouter.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 5000


app.use(cors({
  origin : 'https://client-swart-six-73.vercel.app'
}))
app.use(express.json())
app.use('/api', router)


app.listen(port, () => {

  console.log('server is running on port ' + port)
  connectDB()
})

