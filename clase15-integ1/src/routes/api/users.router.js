import { Router } from 'express'
import { modelUser } from '../../models/users.model.js'

const router = Router()

router.get('/', async (req, res) => {
    try {
        const users = await modelUser.find()
        res.send({status: 'success', users})        
    } catch (error) {
        console.log(error)
    }
})

router.post('/', async (req, res) => {
    const { first_name, last_name, email } = req.body
    // validaciones
    const result = await modelUser.create({
        first_name, 
        last_name, 
        email
    })     

    res.send({
        status: 'success',
        payload: result
    })
})
router.get('/:uid', async (req, res) => {
    const { uid } = req.params
    const user = await modelUser.findOne({_id: uid})
    res.send({status: 'success', data: user})
})
router.put('/:uid', async (req, res) => {
    res.send('update user')
})
router.delete('/:uid', async (req, res) => {
    res.send('delete user')
})

export default router