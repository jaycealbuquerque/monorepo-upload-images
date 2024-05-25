import crypto from 'crypto'
import multer from 'multer'
import path from 'path'

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp')
console.log(tmpFolder)

export default {
  directory: tmpFolder,
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex')
      const time = new Date().getTime()
      // const filename = `${fileHash}-${file.originalname}`
      const filename = `${fileHash}-${time}.jpg`

      return callback(null, filename)
    },
  }),
}
