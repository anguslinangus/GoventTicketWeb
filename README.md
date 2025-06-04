# Govent Ticket Web

一個現代化的活動票務平台，提供完整的前後端解決方案。

## 🚀 項目概述

Govent 是一個全功能的活動票務管理系統，包含：
- 🎫 活動瀏覽與搜索
- 👤 用戶註冊與登入
- 🛒 購物車與結帳
- 💳 多種支付方式
- 📱 響應式設計
- 🔐 JWT 身份驗證

## 📁 項目結構

```
govent/
├── GoventFrontEnd/          # Next.js 前端應用
│   ├── components/          # React 組件
│   ├── pages/              # 頁面路由
│   ├── hooks/              # 自定義 Hooks
│   ├── services/           # API 服務
│   └── styles/             # 樣式文件
├── govent-backend/         # Express.js 後端 API
│   ├── routes/             # API 路由
│   ├── models/             # 數據模型
│   ├── middlewares/        # 中間件
│   └── services/           # 業務邏輯
└── *.sql                   # 數據庫結構文件
```

## 🛠️ 技術棧

### 前端
- **框架**: Next.js 14
- **UI 庫**: React Bootstrap 5
- **狀態管理**: React Context
- **HTTP 客戶端**: Axios
- **樣式**: SCSS, Bootstrap 5
- **圖標**: React Icons, FontAwesome

### 後端
- **框架**: Express.js
- **數據庫**: MySQL
- **ORM**: Sequelize
- **身份驗證**: JWT
- **支付**: ECPay, LINE Pay
- **文件上傳**: Multer

## 🚀 快速開始

### 環境要求
- Node.js >= 18.0.0
- MySQL >= 8.0
- npm 或 yarn

### 安裝步驟

1. **克隆項目**
   ```bash
   git clone https://github.com/anguslinangus/GoventTicketWeb.git
   cd GoventTicketWeb
   ```

2. **安裝前端依賴**
   ```bash
   cd GoventFrontEnd
   npm install
   ```

3. **安裝後端依賴**
   ```bash
   cd ../govent-backend
   npm install
   ```

4. **配置數據庫**
   - 創建 MySQL 數據庫
   - 導入 `big_govent.sql` 文件
   - 配置後端環境變量

5. **啟動開發服務器**
   
   **後端** (端口 3005):
   ```bash
   cd govent-backend
   npm run dev
   ```
   
   **前端** (端口 3000):
   ```bash
   cd GoventFrontEnd
   npm run dev
   ```

6. **訪問應用**
   - 前端: http://localhost:3000
   - 後端 API: http://localhost:3005

## 📋 主要功能

### 用戶功能
- ✅ 用戶註冊/登入/登出
- ✅ 個人資料管理
- ✅ 活動瀏覽與搜索
- ✅ 購物車管理
- ✅ 訂單管理
- ✅ 收藏功能

### 主辦方功能
- ✅ 活動創建與管理
- ✅ 票券設定
- ✅ 銷售統計
- ✅ 訂單管理

### 系統功能
- ✅ 響應式設計
- ✅ JWT 身份驗證
- ✅ 文件上傳
- ✅ 支付整合
- ✅ 郵件通知

## 🔧 開發指南

### 代碼規範
- 使用 ESLint 進行代碼檢查
- 使用 Prettier 進行代碼格式化
- 遵循 React/Next.js 最佳實踐

### API 文檔
後端 API 遵循 RESTful 設計原則，主要端點包括：
- `/api/auth` - 身份驗證
- `/api/events` - 活動管理
- `/api/users` - 用戶管理
- `/api/orders` - 訂單管理

## 📝 更新日誌

### v1.1.0 (2024-06-04)
- 🧹 清理測試文件和重複代碼
- 📦 移除未使用的依賴包
- 🐛 修復收藏功能錯誤
- 🔧 優化項目結構

## 👥 貢獻

歡迎提交 Issue 和 Pull Request！

## 📄 授權

此項目採用 ISC 授權條款。

## 📞 聯繫

如有問題，請聯繫：[your-email@example.com] 