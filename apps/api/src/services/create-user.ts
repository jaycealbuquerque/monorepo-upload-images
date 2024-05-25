import { PrismaClient } from '@prisma/client'

export class CreateUserService {
  async execute({ name, cpf, file }) {
    // const originalPath = path.resolve(uploadConfig.directory, file.filename)
    const prisma = new PrismaClient()
    const fileName = file.filename

    const user = await prisma.users.create({
      data: {
        nome: name,
        cpf,
        images: {
          createMany: {
            data: [{ id: fileName }],
          },
        },
      },
    })

    return { user }
  }
}
