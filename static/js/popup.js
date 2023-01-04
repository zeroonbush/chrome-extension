


const data = document.querySelector('.data')
console.log(data)


// chrome.tabs.getSelected(null, function(tab){
//     chrome.tabs.sendMessage(tab.id, { action: 'getDOM' }, function(response){
//         console.log(response)
//     })
// })


// chrome.tabs.executeScript(null, {
//     code: 'console.log("hello")'
// })

// 点击按钮,弹出一个新窗口
const btn1 = document.querySelector('#btn1')
btn1.addEventListener('click', () => {
    chrome.windows.create({
        focused: true,
        url: 'templates/popup_main.html',
        type: 'popup',
        width: 400,
        height: 600
    }, (subWindow) => {
        chrome.windows.update(subWindow.id, {focused: true})
    })
})


const btn2 = document.querySelector('#btn2')
btn2.addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true})
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: setBackgroundColor
    })
})

function setBackgroundColor(){
    chrome.storage.sync.get('color', ({color}) => {
        document.body.style.backgroundColor = color
    })
}
const span1 = document.querySelector('#span1')
chrome.storage.sync.get('color', ({color}) => {
    span1.style.backgroundColor = color
})

const btn3 = document.querySelector('#btn3')
btn3.addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true})
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: getData
    })
})
function getData(){
    const data = document.querySelector('.data')
    const lis = data.querySelectorAll('li')
    let arr = []
    lis.forEach(item => {
        arr.push(item.innerText)
    })
    console.log(arr)
}


chrome.commands.onCommand.addListener(cmdName => {
    console.log(cmdName)
    switch(cmdName){
        case "show-alert":
            chrome.storage.sync.set({msg: cmdName})
            chrome.tabs.query({active: true, currentWindow: true}).then(([tab]) => {
                const para = 'Hello world!!!'
                chrome.scripting.executeScript({
                    target: {tabId: tab.id},
                    function: args => {
                        alert(args)
                        chrome.storage.sync.get(['msg'], ({msg}) => {
                            console.log(`${msg}`)
                            alert(`Command: ${msg}`)
                        })
                    },
                    args: [para]
                })
            })
            break
        default:
            alert(`Unknown Command: ${cmdName}`)
    }
})



