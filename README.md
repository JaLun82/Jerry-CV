# Jerry 保險業務個人網站

原生 HTML、CSS、JavaScript 的一頁式個人介紹與預約網站。

## 視覺方向

依使用者提供的 https://yichenweb.netlify.app/ 參考其手機名片式閱讀方式：深藍底、金色重點、窄版置中、圓形頭像、短介紹、問題區塊與預約按鈕。所有文案、服務內容、表單與案例屬於 Jerry；照片與真實案例尚待提供。

桌機與手機皆採最多 480px 的單欄內容，頂端預約入口常顯。標題字型使用本機提供的 Noto Serif TC 小字集（約 14KB），授權放在 `assets/fonts/OFL.txt`。

## 修改位置

- `index.html`：個人介紹、服務問題、案例、QA 與 Google 表單連結。預約網址直接放在 `data-consultation-link` 的 `href`，不用 JavaScript 也能開啟。
- `css/style.css`：版面與色彩變數。
- `js/site-config.js`：照片路徑與替代文字。
- `js/main.js`：章節焦點接續、照片備援、表單網址檢查、複製連結與年份。
- `assets/`：個人照片與網站字型。

## 尚待確認

正式照片、經同意且匿名的真實案例、諮詢方式、費用、服務範圍與回覆時間；目前保留明確的待補標示。

## 本機預覽與更新

以 Live Server 或瀏覽器開啟 `index.html`，不需要安裝套件。Git remote 是 https://github.com/JaLun82/Jerry-CV ，使用 `main`。依指示提交並上傳，存檔不會自動推送。

`Icons/`、`images/`、`style/` 保留自舊旅遊範本，目前首頁未引用。請勿把密碼、金鑰或客戶私密資料放入公開前端。
