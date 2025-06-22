import * as fs from 'fs'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import createError from 'http-errors'
import express from 'express'
import logger from 'morgan'
import path from 'path'
import session from 'express-session'

// 使用檔案的session store，存在sessions資料夾
import sessionFileStore from 'session-file-store'
const FileStore = sessionFileStore(session)

// 修正 ESM 中的 __dirname 與 windows os 中的 ESM dynamic import
import { fileURLToPath, pathToFileURL } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 讓console.log呈現檔案與行號，與字串訊息呈現顏色用
import { extendLog } from '#utils/tool.js'
// import 'colors' // 暫時移除 colors 以修復部署問題
extendLog()

// 建立 Express 應用程式
const app = express()

// cors設定，參數為必要，注意不要只寫`app.use(cors())`
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'https://localhost:9000',
      'https://govent.zeabur.app',
      process.env.FRONTEND_URL, // Vercel 部署 URL
      /\.vercel\.app$/, // 允許所有 Vercel 域名
    ].filter(Boolean), // 過濾掉 undefined 值
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
)

// 視圖引擎設定
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// 記錄HTTP要求
app.use(logger('dev'))
// 剖析 POST 與 PUT 要求的JSON格式資料
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// 剖折 Cookie 標頭與增加至 req.cookies
app.use(cookieParser())
// 在 public 的目錄，提供影像、CSS 等靜態檔案
app.use(express.static(path.join(__dirname, 'public')))

// fileStore的選項 session-cookie使用
const fileStoreOptions = { logFn: function () {} }
app.use(
  session({
    store: new FileStore(fileStoreOptions), // 使用檔案記錄session
    name: 'SESSION_ID', // cookie名稱，儲存在瀏覽器裡
    secret: '67f71af4602195de2450faeb6f8856c0', // 安全字串，應用一個高安全字串
    cookie: {
      maxAge: 30 * 86400000, // 30 * (24 * 60 * 60 * 1000) = 30 * 86400000 => session保存30天
    },
    resave: false,
    saveUninitialized: false,
  })
)

// 載入routes中的各路由檔案，並套用api路由 START
const apiPath = '/api' // 預設路由
const routePath = path.join(__dirname, 'routes')
const filenames = await fs.promises.readdir(routePath)

for (const filename of filenames) {
  // 只載入 .js 文件，排除 .backup 和其他文件
  if (!filename.endsWith('.js')) {
    continue
  }
  
  // 暫時跳過 line-login 路由，如果 LINE 環境變數未設定
  if (filename === 'line-login.js' && !process.env.LINE_CHANNEL_ID) {
    console.log('⚠️  Skipping line-login route - LINE_CHANNEL_ID not set')
    continue
  }
  
  try {
    console.log(`📂 Loading route: ${filename}`)
    const item = await import(pathToFileURL(path.join(routePath, filename)))
    const slug = filename.split('.')[0]
    const routePath = `${apiPath}/${slug === 'index' ? '' : slug}`
    app.use(routePath, item.default)
    console.log(`✅ Route loaded: ${routePath}`)
  } catch (error) {
    console.log(`❌ Failed to load route ${filename}:`, error.message)
    // 繼續載入其他路由，不要因為一個路由失敗就停止
  }
}
// 載入routes中的各路由檔案，並套用api路由 END

// 捕抓404錯誤處理
app.use(function (req, res, next) {
  next(createError(404))
})

// 錯誤處理函式
app.use(function (err, req, res, next) {
  console.log('🚨 Error occurred:', err.message)
  console.log('🚨 Error stack:', err.stack)
  
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // 設定正確的狀態碼
  const statusCode = err.status || 500
  res.status(statusCode)
  
  // 返回 JSON 錯誤訊息
  res.json({ 
    error: err.message,
    status: statusCode,
    ...(req.app.get('env') === 'development' && { stack: err.stack })
  })
})

export default app
