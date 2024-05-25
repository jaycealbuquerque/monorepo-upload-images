import { PrismaClient } from '@prisma/client'

export class GetUserService {
  async execute(id) {
    const prisma = new PrismaClient()
    const user = await prisma.users.findFirst({
      select: { id, images: { select: { id: true } } },
      // where: {
      //   id,
      // },
      // include: { images:  },
    })

    const patch = await prisma.patchFolder.findUnique({
      where: {
        id: 1,
      },
      select: { patch: true },
    })
    const imageId = user.images[0].id
    const caminho = patch.patch

    const caminhoPatch = `${caminho}/${imageId}`
    const caminhoPatch1 = `${caminho}/${imageId}`
    console.log(caminhoPatch)
    // console.log(patch)

    // let totalPriceAto = 0
    // user.forEach((ato) => {
    //   totalPriceAto += ato.id
    // })
    // console.log(totalPriceAto)
    // const result = user?.images
    return [caminhoPatch, caminhoPatch1]
  }
}
