import { faker } from '@faker-js/faker'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function clean() {
  await prisma.users.deleteMany()
  await prisma.images.deleteMany()
}

// async function main2() {
//   await prisma.users.deleteMany()
//   await prisma.images.deleteMany()
//   for (let i = 0; i < 2; i++) {
//     await prisma.users.create({
//       data: {
//         nome: faker.person.fullName(),
//         cpf: faker.string.numeric(11),
//         email: faker.internet.email(),
//         telenofe: faker.phone.number(),
//         rua: faker.location.streetAddress(true),
//         cidade: faker.location.city(),
//         estado: faker.location.state(),
//         cep: faker.location.zipCode('###-#####'),
//         images: {
//           createMany: {
//             data: Array.from({ length: 3 }).map(() => ({
//               url: faker.image.urlLoremFlickr({
//                 width: 1600,
//                 height: 2400,
//               }),
//               url_thumbnail: faker.image.urlLoremFlickr({
//                 width: 1024,
//                 height: 800,
//               }),
//             })),
//           },
//         },
//       },
//     })
//   }
// }

async function createManyUser() {
  await prisma.users.deleteMany()
  await prisma.images.deleteMany()

  const userPromises = Array.from({ length: 1000 }).map(async () => {
    return await prisma.users.create({
      data: {
        nome: faker.person.fullName(),
        cpf: faker.string.numeric(11),
        email: faker.internet.email(),
        telenofe: faker.phone.number(),
        rua: faker.location.streetAddress(true),
        cidade: faker.location.city(),
        estado: faker.location.state(),
        cep: faker.location.zipCode('###-#####'),
        images: {
          createMany: {
            data: Array.from({ length: 3 }).map(() => ({
              url: faker.image.urlLoremFlickr({
                width: 1600,
                height: 2400,
              }),
              url_thumbnail: faker.image.urlLoremFlickr({
                width: 1024,
                height: 800,
              }),
            })),
          },
        },
      },
    })
  })
  // await Promise.all(userPromises)
  Promise.all(userPromises)
  console.log('1000 users with 3 images each have been created')
}

createManyUser()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
