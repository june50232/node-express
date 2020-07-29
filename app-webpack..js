// require 是匯入的意思，我們把 express 套件匯入進來。
// 並 express() 實體化產生為物件，此物件宣告給 app 來使用。
// 這樣我們就可以藉由 app 來使用 express 物件了！
const express = require('express')
const app = express()

// app.get('/',...); 是當路由相符時，也就是指向 URL 根目錄 ( / )，並且 HTTP 的要求方法為 GET
app.get('/', (req, res) => { // 沒有 babel 也可以寫，但要看瀏覽器支不支援 https://caniuse.com/#search=es6
    // 當兩者都達成條件後就會執行後面的 function，
    // function 內容為 res.send('Hello World!');
    // 即是傳送 Hello World! 來當作回應。
    res.send('Hello World')
})

// 最後 app.listen(3000,...); 是指跑執行檔讓伺服器啟動後，用 port：3000 來接聽連線
app.listen(3000, () => {

    // 所以成功啟動了伺服器，將會印出字樣 Example app listening on port 3000!。
    console.log('node-express app listening on port 3000')
})
