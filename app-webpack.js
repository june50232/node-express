// require 是匯入的意思，我們把 express 套件匯入進來。
// 並 express() 實體化產生為物件，此物件宣告給 app 來使用。
// 這樣我們就可以藉由 app 來使用 express 物件了！
const express = require('express')
const app = express()
const path = require('path')
const DIST_DIR = path.join(__dirname, '../dist'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW
const port = 3000

app.use(express.static(DIST_DIR))

app.get('/', (req, res) => {
    // change what the route "/" returns.
    // It should return the dist/index.html file.
    res.sendFile(HTML_FILE)
})

// 最後 app.listen(3000,...); 是指跑執行檔讓伺服器啟動後，用 port：3000 來接聽連線
app.listen(port, () => {

    // 所以成功啟動了伺服器，將會印出字樣 Example app listening on port 3000!。
    console.log(`node-express app listening on port ${port}`)
})
