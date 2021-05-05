// 根据尺寸判断设备端
export function device() {
    if (window && document) {
        let clientWidth =  document.documentElement.clientWidth || 1920
        if(clientWidth>750) {
            return 'PC'
        }
        else {
            return 'Mobile'
        }
    }
    else {
        // 非浏览器环境
        return 'NotBrowser'
    }
}