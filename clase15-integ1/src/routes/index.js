import { Router } from 'express'
import routerViews from './views.router.js'
import routerUsers from './api/users.router.js'


const router = Router()

// conf
router.use('/', routerViews)
router.use('/api/users', routerUsers)
router.use('/api/products', ()=>{})
router.use('/api/carts', ()=>{})

export default router