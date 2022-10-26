const router = require("express").Router()
const { GET_SINGLE_SLEEP,
        GET_SLEEPS, DELETE_SLEEP,
        UPDATE_SLEEP, POST_SLEEP
    } = require('../controllers/sleepControllers')

router.get('/', GET_SLEEPS)
router.post('/', POST_SLEEP)
router.get('/:id', GET_SINGLE_SLEEP)
router.delete('/:id', DELETE_SLEEP)
router.patch('/:id', UPDATE_SLEEP)

module.exports = router;
