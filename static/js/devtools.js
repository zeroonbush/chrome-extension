// 新增一个和Elements,Console同级别的面板
chrome.devtools.panels.create(
    "MyPanel",  // 面板标题
    "../images/popup.png",  // icon ,设置了也看不见
    "../../MyPanel.html",  // 面板展示页面
    function(panel){
        console.log('自定义面板创建成功!')
    }
)

// 给Elements面板自定义一个侧边栏
chrome.devtools.panels.elements.createSidebarPane(
    "Images测试",
    function(sidebar){
        sidebar.setExpression('document.querySelectorAll("img")', "All Images")
    }
)