import express from 'express'
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log('🏠 Root route accessed')
  res.json({ 
    message: 'Govent Backend API Server',
    status: 'running',
    timestamp: new Date().toISOString(),
    version: '1.1.0'
  })
})

/* GET health check */
router.get('/health', function (req, res, next) {
  console.log('❤️ Health check accessed')
  res.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString()
  })
})

export default router
