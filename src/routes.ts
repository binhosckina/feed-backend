import { Router } from 'express'
import PostController from './controllers/PostController'

const routes = Router()

routes.get('/posts', PostController.index)
routes.post('/post', PostController.create)

export default routes
