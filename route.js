// const route = require('express').Router();
// const { middleware } = require('../middleware/middle');
// const usercontroller = require("./../controller/control")

// router.get('/allUserinfo', middleware,usercontroller.allUser)

// module.exports=router





const {router} = require('express')
const mycontroller = require('../controller/control')
const router = Router()
router.get('/get', mycontroller.method1)
router.post('/post', mycontroller.method1)

module.exports = router