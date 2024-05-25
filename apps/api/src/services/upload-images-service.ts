import { Prisma, PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'

import uploadConfig from '../config/upload'

export class UploadImagesService {
  // async execute(name, cpf, file: Express.Multer.File): Promise<void> {

  async delete(file: Express.Multer.File): Promise<void> {
    const originalPath = path.resolve(uploadConfig.directory, file)

    await fs.promises.unlink(originalPath)
  }
}

export default UploadImagesService
