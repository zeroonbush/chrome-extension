(() => {
    window.onload = () => {
        const show_title = document.querySelector('#show_title')
        document.querySelector('#btn1').onclick = async () => {
            const tabs = await chrome.tabs.query({})
            console.log(tabs)
            tabs.forEach(tab => {
                // if(tab.active === true){
                    chrome.tabs.sendMessage(tab.id, {event: "get-title", parentID: tab.id}, response => {
                        if(response){
                            show_title.innerHTML += JSON.stringify(response) + `<br>`
                        }
                    })
                // }
            })
        }
    }
})()
  