# Jerry 保險業務個人網站

一頁式、原生 HTML／CSS／JavaScript，無須安裝套件。

## 頁面順序

個人照片與關於我 → 可以討論的問題 → 服務客戶案例 → QA → Google 表單預約。

## 修改位置

- `index.html`：自我介紹、問題、真實案例與 QA。尚未提供的資料明確標示待補；案例不得以虛構內容當作真實見證。
- `css/style.css`：暖白／深綠配色、桌機與手機排版。
- `js/site-config.js`：個人照片路徑、照片替代文字與公開 Google 表單網址。照片可放在 `assets/`。表單接受 HTTPS `forms.gle` 短網址或 `docs.google.com/forms/.../viewform` 填寫網址，請勿放編輯連結。
- `js/main.js`：手機選單、圖片載入備援、表單入口與年份。

## 目前待補

正式個人照片、服務經歷與背景、經客戶同意的匿名真實案例、諮詢費用／方式／回覆時間。Google 表單已設定為 https://forms.gle/PCeYZ4XHwV8WV4zs9 。未設定表單時，預約按鈕會清楚顯示準備中，不會模擬送出。所有前端設定均為公開內容，請勿放入私密資料。

## 預覽與更新

以 Live Server 開啟 `index.html`，或直接以瀏覽器開啟。Git remote 為 https://github.com/JaLun82/Jerry-CV ，使用 `main`；依指示提交並上傳，本機存檔不會自動推送。

`Icons/`、`images/`、`style/` 保留自舊旅遊範本，目前的首頁不引用。
