import Vue from 'vue'
import Router from 'vue-router'

/**
 * 此区域引入组件
 */

import Hello from '../components/HelloWorld.vue'

Vue.use(Router)
// // 解决报错
// const originalPush = Router.prototype.push
// const originalReplace = Router.prototype.replace
// // push
// Router.prototype.push = function push (location, onResolve, onReject) {
// if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
// return originalPush.call(this, location).catch(err => err)
// }
// // replace
// Router.prototype.replace = function push (location, onResolve, onReject) {
// if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
// return originalReplace.call(this, location).catch(err => err)
// }
export const publicRouters = [
  {
    path:'*',
    name:'404',
    component:Hello,
    meta:{
      title:'404',
      need_login:false
    }
  },
  {
    path:'',
    name:'功能清单页',
    component:Hello,
    meta:{
      title:'功能清单页',
      need_login:false
    }
  },
  {
    path:'/notneed',
    name:'notneed',
    component:()=>import('../components/notneedlogin.vue'),
    meta:{
      title:'无需登录',
      need_login:false
    }
  },
  {
    path:'/needlogin',
    name:'needlogin',
    component:()=>import('../components/needlogin.vue'),
    meta:{
      title:'需登录才能显示',
      need_login:true
    }
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('../components/login.vue'),
    meta:{
      title:'登录',
      need_login:false
    }
  }
]

export const dynamicRouters = [
  {
    path:'/privi1',
    name:'privi1',
    component:()=>import('../components/privi1.vue'),
    meta:{
      title:'权限1',
      need_login:true
    }
  },
  {
    path:'/privi2',
    name:'privi2',
    component:()=>import('../components/privi2.vue'),
    meta:{
      title:'权限2',
      need_login:true
    }
  },
  {
    path:'/privi3',
    name:'privi3',
    component:()=>import('../components/privi3.vue'),
    meta:{
      title:'权限3',
      need_login:true
    }
  },
]
let permissionList = Object.keys(JSON.parse(localStorage.getItem('permissionList'))||{})
let allowRouter = []
// debugger
if(permissionList&&permissionList.length>0){
  allowRouter = dynamicRouters.filter((router)=>{
    return permissionList.includes(router.name)
  })
}

const allRoutes = [...publicRouters,...allowRouter]

let router =  new Router({
  routes:allRoutes
})

export default router
