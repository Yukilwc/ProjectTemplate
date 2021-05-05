import router from './router/index'
import store from './store/index';
import { getToken } from '@/utils/auth'

console.log('路由跳转时的权限验证')
router.beforeEach(async (to, from, next) => {
    console.log('==============================router.beforeEach((to, from, next)', to, from)
    // ==============================对登录的处理
    if (to.path === '/login') {
        next()
        return
    }
    //  ==============================权限验证 如果路由中meta存在auth字段，则需要进行校验
    // 判断是否需要进行权限验证,判断的依据依赖于路由配置中auth字段的存在
    if (to.meta.auth) {
        // 需要权限验证
        // ====================token权限验证
        if (!getToken()) {
            next('/login')
            return
        }
        // ====================业务页面与功能访问权限验证
        console.log('==============================权限初始化开始')
        await store.dispatch('permission/initUserPermission')
        console.log('==============================权限初始化完成', store.state.permission)
        if (hasAuth(to)) {
            //  ==============================tab栏 状态处理,只针对tab路由的页面
            changeLayoutStatus(to)
            // 有权限
            next()
            return
        }
        else {
            //  ---已改为工作台，工作台不需要跳转权限
            next('/workspace')
            return
        }
    }
    else {
        // 无需权限验证
        next()
        return
    }
})
function changeLayoutStatus(to) {
    console.log('current router', to)
    if (to.meta.isTab) {
        // store.commit('app/SET_ASIDE_MENU_ACTIVE', to.meta.auth)
        // 增加tab
        store.dispatch('app/addKeepAliveTab', {
            label: to.meta.label, // tab显示的名称
            auth: to.meta.auth, // 唯一权限id
            breadcrumb: to.meta.breadcrumb, // 面包屑路径
            path: to.path, // 路由跳转用路径
            name: to.name, // 缓存的路由name
            closable: true// 是否显示关闭icon，拥有关闭功能
        })
        // 修改激活的tab
        store.commit('app/SET_ACTIVE_TAB_NAME', to.name)
    }
}
// 验证进入的路由，是否在权限名单中
function hasAuth(to) {
    let authList = store.state.permission.authList
    // 工作台不需要权限
    if(to.meta.auth == "TS-0106"){
        // 有权限
        return true
    }
    // 工作台不需要权限
    if (authList.includes(to.meta.auth)) {
        // 有权限
        return true
    }
    else {
        // 无权限
        return false
    }
}
// 移动端
// function move(to) {
//     try{
//         let body = document.querySelector('body');
//         // 如果为手机宽度 判断相对应路由的最小宽度
//         if(device() == "Mobile"){
//             let list = ['/loginMobile','/registerMobile','/certificationMobile'];
//             let path = list.filter((item)=>{return item == to.path})
//             if(path.length > 0){
//                 body.style = "min-width: 0"
//             }else{
//                 body.style = "min-width: 1280px;"
//             }
//             console.log('pathpathpathpathpathpathpath',path);
//         }else{
//             body.style = "min-width: 1280px;"
//         }
//     }
//     catch(e){
//         console.error(e)
//     }
// }