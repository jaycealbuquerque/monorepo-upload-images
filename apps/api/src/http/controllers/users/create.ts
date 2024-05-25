import { Request, Response } from 'express'

import { CreateUserService } from '../../../services/create-user'

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, cpf } = request.body
    const { file } = request

    const createUserService = new CreateUserService()

    const result = await createUserService.execute({ name, cpf, file })

    return response.json(result)
  }
}
