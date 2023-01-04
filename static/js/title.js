console.log('Initialize get title plugin.')

window.addEventListener(`load`, () => {
    console.log('title.js加载好了')
    chrome.runtime.onMessage.addListener( (media, sender, sendResponse) => {
      if (media.event === 'get-title') {
        const targetID = media.parentID // where the result putting.
  
        /* NO PERMISSION TO USE THE FUNCTION (chrome.tabs) ON THE "content_scripts"
        const capturing = chrome.tabs.captureVisibleTab(targetID, {
          format: "jpeg", // png
          // quality: 75, // 0~100 integer (for jpeg use only)
        })
        capturing.then((imageURI)=>{
          sendResponse({title: document.title, imageURI})
        }, (error)=>{
          console.log(`Error: ${error}`)
        })
        return true
  
         */
        sendResponse({title: document.title})
      }
    })
  })