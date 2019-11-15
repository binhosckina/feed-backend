import { Request, Response } from 'express'
import Post from '../schemas/Post'

class PostController {
  public async index (req: Request, res: Response): Promise<Response> {
    const users = await Post.find()

    return res.json(users)
  }

  public async create (req: Request, res: Response): Promise<Response> {
    const user = await Post.create(req.body)

    return res.json(user)
  }
}

export default new PostController()
