import { Router } from 'express'

import { testRouter } from './testroute.route'

const routes = Router()

routes.use('/test', testRouter)

export { routes }
