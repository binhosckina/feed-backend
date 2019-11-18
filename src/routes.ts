import { Router } from 'express'
import PostController from './controllers/PostController'

const routes = Router()

routes.get('/', (req, res) => res.json({ Hello: 'World' }))
routes.get('/posts', PostController.index)
routes.post('/post', PostController.create)

export default routes
