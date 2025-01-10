const { Router } = require('express')

const router = Router()

// confiuguración interna de exprses router para views

router.get('/', async (req, res) => {
    req.io('connection', socket =>{
        
    })
    // const proucts = la logica los productos
    res.render('home', { products: [] })
})

router.get('/realtimeproducts', (req, res) => { 
    res.render('realtimeproducts')
})


module.exports = router

