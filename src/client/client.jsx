import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

// hydrate：
// React 預期在伺服器端與客戶端所渲染的內容是相同的，
// 如果不相同，hydrate 會修復不同的部分，但同時會跳出 Warning，
// 警告 hydrate 前後的 DOM 長得不一樣。
//
// hydrate 缺點：不一樣時，hydrate 不保證會修復 attribute，而且會降低 React 的效能。
ReactDOM.hydrate(<App />,
    document.getElementById('root'))
