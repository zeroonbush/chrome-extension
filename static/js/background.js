setInterval(() => {
    console.log('background', 123456)
}, 5000)
let color = '#3aa757'
chrome.runtime.onInstalled.addListener(function(){
    console.log('插件已被安装')
    chrome.storage.sync.set({color})
    console.log('设置了一个颜色: #3aa757')

    // chrome.storage.sync.set({color: '#3aa757'}, function(){
    //     console.log('storage init color value')
    // })

    // console.log(document.body)
})


// chrome.runtime.onMessage.addListener((message, callback) => {
//     const tabId = getForegroundTabId();
//     if (message.data === "setAlarm") {
//       chrome.alarms.create({delayInMinutes: 5})
//     } else if (message.data === "runLogic") {
//       chrome.scripting.executeScript({file: 'logic.js', tabId});
//     } else if (message.data === "changeColor") {
//       chrome.scripting.executeScript(
//           {func: () => document.body.style.backgroundColor="orange", tabId});
//     };
//   });

// chrome.runtime.onMessage.addListener(({type, name }) => {
//     let count = 10086
//     chrome.storage.local.set({'count': count})
//     // const count = await chrome.storage.local.get(['count'])
//     // if(type === 'add-count'){
//     //     count++
//     //     chrome.storage.local.set({'count': count})
//     // }
// })

// chrome.runtime.onMessage.addListener(async ({type, name }) => {
    
//     const count = await chrome.storage.local.get(['count'])
//     if(type === 'add-count'){
//         count++
//         chrome.storage.local.set({'count': count})
//     }
// })