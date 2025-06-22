export const PORT = 3000
export const DEV = true

// express 的位置
export const apiBaseUrl = process.env.NODE_ENV === 'production' 
  ? 'https://goventbackend.onrender.com/api' 
  : 'http://localhost:3005/api'
export const avatarBaseUrl = process.env.NODE_ENV === 'production'
  ? 'https://goventbackend.onrender.com/avatar'
  : 'http://localhost:3005/avatar'

// 圖片基礎 URL
export const imageBaseUrl = process.env.NODE_ENV === 'production'
  ? 'https://goventbackend.onrender.com/images'
  : 'http://localhost:3005/images'

// 完整的後端基礎 URL (不含 /api)
export const backendBaseUrl = process.env.NODE_ENV === 'production'
  ? 'https://goventbackend.onrender.com'
  : 'http://localhost:3005'

// breadcrumb面包屑使用
// 用pathname英文對照中文的名稱(類似關聯陣列的物件)
// 使用方式需用 ex. pathnameLocale['home']
// 下面是防止自動格式化使用註解
/* eslint-disable */
// prettier-ignore
export const pathsLocaleMap = {
  'cart':'購物車',
  'forget-password':'重設密碼',
  'register':'註冊',
  'login':'登入',
  'member':'會員',
  'news':'新聞',
  'about': '關於我們',
  'product': '產品',
  'men': '男性',
  'women': '女性',
  'category': '分類',
  'list': '列表',
  'mobile': '手機',
  'pc': '電腦',
  'student': '學生資料',
  'com-test':'元件測試',
  'breadcrumb':'麵包屑',
  'home':'首頁',
  'posts':'張貼文章',
  'test':'測試',
  'user':'會員',
  'payment':'結帳頁面'
}
/* eslint-enable */
