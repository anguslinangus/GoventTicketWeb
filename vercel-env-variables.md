# Vercel 環境變數設定指南

## 🔥 Firebase 環境變數 (必要)

在 Vercel Dashboard > Settings > Environment Variables 中添加以下變數：

### Firebase Configuration
```
Name: NEXT_PUBLIC_FIREBASE_API_KEY
Value: AIzaSyBhIe5T0VSZ_PBLNRhNQmVG4aGheLejKyI
Environment: Production, Preview, Development

Name: NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
Value: govent-27663.firebaseapp.com
Environment: Production, Preview, Development

Name: NEXT_PUBLIC_FIREBASE_PROJECT_ID
Value: govent-27663
Environment: Production, Preview, Development

Name: NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
Value: govent-27663.appspot.com
Environment: Production, Preview, Development

Name: NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
Value: 312833573850
Environment: Production, Preview, Development

Name: NEXT_PUBLIC_FIREBASE_APP_ID
Value: 1:312833573850:web:be6206aa7d6bf4e90376e3
Environment: Production, Preview, Development

Name: NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
Value: G-DPVTSVHQRQ
Environment: Production, Preview, Development
```

### Google Maps API (可選，地圖功能修復後使用)
```
Name: NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
Value: AIzaSyAHFrjbu51UUJwGpirJ1l6vhsfT6LbFcrY
Environment: Production, Preview, Development
```

## 📋 設定步驟

1. **登入 Vercel Dashboard**: https://vercel.com/dashboard
2. **選擇專案**: 找到 `govent-frontend` 專案
3. **進入設定**: 點擊 Settings 標籤
4. **環境變數**: 點擊左側的 Environment Variables
5. **添加變數**: 點擊 "Add New" 按鈕
6. **填入資料**: 
   - Name: 變數名稱
   - Value: 變數值
   - Environment: 勾選 Production, Preview, Development
7. **儲存**: 點擊 Save
8. **重複**: 對每個環境變數重複步驟 5-7

## ⚡ 設定完成後

- Vercel 會自動觸發重新部署
- 或者可以手動在 Deployments 標籤中重新部署
- 確認 Firebase 登入功能正常運作

## 🔧 驗證設定

部署完成後，可以在瀏覽器開發者工具中檢查：
```javascript
// 在瀏覽器 Console 中執行
console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY)
```

如果顯示正確的 API Key，表示設定成功。 