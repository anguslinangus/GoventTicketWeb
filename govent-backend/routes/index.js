import express from 'express'
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ 
    message: 'Govent Backend API Server',
    status: 'running',
    timestamp: new Date().toISOString(),
    version: '1.1.0'
  })
})

export default router
