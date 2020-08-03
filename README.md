# node-express
practice node express and frontend preprocess

### app-simple.js
> 參考：[🔗 Node.js+Express 安裝設置與簡單實作](https://medium.com/@charming_rust_oyster_221/node-js-express-%E5%AE%89%E8%A3%9D%E8%A8%AD%E7%BD%AE%E8%88%87%E7%B0%A1%E5%96%AE%E5%AF%A6%E4%BD%9C-5920e1d70d9d)
>
> 啟動：```$ nodemon app-simple.js```

### app-babel.js
> 參考：[🔗 [教學] @babel/preset-env 設定](https://shubo.io/babel-preset-env/)
>
> 啟動：```$ nodemon app-babel.js``` 

### webpack.config.js
> 參考：https://thedeployguy.com/2020-06-07-getting-to-know-webpack/
>
> 參考：https://www.valentinog.com/blog/babel/

### app-webpack-react.js
> 參考：https://dev.to/kedar9/creating-a-node-app-with-react-webpack-4-babel-7-express-and-sass-3mae


### app-webpack-react-ssr.js
> 參考：https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/server-side-rendering-ssr-in-reactjs-part1-d2a11890abfc

### 其他學習

```npm install -D``` 等於 ```npm install --save-dev```
> 參考：https://docs.npmjs.com/cli/install

```polyfill``` : 用於實現瀏覽器並不支援的原生API的程式碼
> 參考：https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/29473/

```CRA```
> 參考：https://medium.com/nitas-learning-journey/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BCday-2-%E5%BB%BA%E7%AB%8Breact%E5%B0%88%E6%A1%88-f03e71e59c98
> 
> CRA最棒的地方就是不需要安裝或設定Webpack和Babel之類的工具，它會預設並隱藏，可以省不少工。
>
> 參考：https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/server-side-rendering-ssr-in-reactjs-part1-d2a11890abfc
>
> 實作 React SSR 時我們不會用 CRA 建立 React APP，因為我們要將 bundle.js 分成 express 與 React APP 用的，所以要客製化 bundle.js。

```npm run all```
> 參考：https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/server-side-rendering-ssr-in-reactjs-part1-d2a11890abfc#7156
>
> 如果你覺得要開三個 termial 執行 npm-script 很麻煩，可以使用 npm-run-all 解決方案，它可以幫你整合三個指令為一個指令，而且使用上很簡單，一行就可以搞定。
>
> 參考：https://www.npmjs.com/package/npm-run-all
>
> We sometimes use & to run multiple command in parallel, 
> but cmd.exe (npm run-script uses it by default) does not support the &. 
> Half of Node.js users are using it on Windows, 
> so the use of & might block contributions. 
> npm-run-all --parallel works well on Windows as well.

### React router :
> 參考：https://www.techiediaries.com/react/react-router-5-4-tutorial-examples/

