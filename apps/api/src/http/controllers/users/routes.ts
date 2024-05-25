import { Router } from 'express'
import multer from 'multer'

import uploadConfig from '../../../config/upload'
import { CreateUserController } from './create'
import { GetUserController } from './get-user'

const usersRoutes = Router()
const upload = multer(uploadConfig)

usersRoutes.post(
  '/user',
  upload.single('image'),
  new CreateUserController().handle,
)

usersRoutes.get('/user/:id', new GetUserController().handle)

export { usersRoutes }
