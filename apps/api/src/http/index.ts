import { Router } from 'express'
import multer from 'multer'

import uploadConfig from '../config/upload'
// import { DeleteImagesService } from '../services/delete-images-service'
import { UploadImagesService } from '../services/upload-images-service'

const routes = Router()
const upload = multer(uploadConfig)

// routes.post('/', upload.array('image', 3), async (request, response) => {

routes.delete('/image/:filename', async (request, response) => {
  const { filename } = request.params

  const uploadImagesService = new UploadImagesService()

  await uploadImagesService.delete(filename)

  return response.send()
})

export default routes
