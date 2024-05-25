import { Request, Response } from 'express'

import { GetUserService } from '../../../services/get-user'

export class GetUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params

    const getUserService = new GetUserService()

    const result = await getUserService.execute(id)

    response.sendFile(result)
  }
}
