// import 'dotenv/config';

import express from 'express'

import routes from './http'
import { usersRoutes } from './http/controllers/users/routes'

const app = express()

app.use(express.json())

// app.use(routes)
app.use(usersRoutes)

app.listen(3333, () => {
  console.log('Server is running on PORT 3333')
})
