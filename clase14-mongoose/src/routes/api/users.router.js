const { Router } = require('express')
const { userModel } = require('../../models/users.model')


const router = Router()


// configuración de nuestra ruta de usuarios
router.get('/', async (req, res) => {
    try {
        const usersDb = await userModel.find({})
        res.send({
            status: 'success',
            payload: usersDb
        })
    } catch (error) {
        console.log(error)
    }
})
router.post('/', async (req, res) => {
    try {
        const { body } = req
        const result = await userModel.create(body)

        res.send({status: 'success', payload: result })
    } catch (error) {
        console.log(error)
    }
})

router.get('/:uid', async (req, res) => {
    try {
        const {uid} = req.params
        const user = await userModel.findById({_id: uid })
        res.send({status: 'success', payload: user})
    } catch (error) {
        console.log(error)
    }
})
router.put('/:uid', async (req, res) => {
    try {
        const {uid} = req.params
        const { body } = req
        const result = await userModel.findByIdAndUpdate({_id: uid}, body)
        res.send({status: 'success', payload: result})
    } catch (error) {
        console.log(error)
    }
})
router.delete('/:uid', async (req, res) => {
    try {
        const {uid} = req.params
        const result = await userModel.findByIdAndDelete({_id: uid }, {new: true})
        res.send({status: 'success', payload: result})
    } catch (error) {
        console.log(error)
    }
})

module.exports = router