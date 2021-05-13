// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.directive('permission',{
  inserted(el, binding, vnode){
    const permission = binding.value; // 获取权限值
    const page_name = router.currentRoute.name; // 获取当前路由名称
    const have_permissions = JSON.parse(window.localStorage.getItem('permissionList'))[page_name] || ''; // 当前用户拥有的权限
    if (!have_permissions.includes(permission)) {
      console.log(el.parentNode); 
      el.parentNode.removeChild(el); //不拥有该权限移除dom元素
    }
  }
})
router.beforeEach((to,from,next)=>{
  // console.log(router.options.routes.length);
  if(to.meta.need_login){
    if(window.localStorage.getItem('token')==null){
      next({
        path:'/login',
        query:{
          redirect_path:to.path
        },
      })
    }else{
      next()
    }
  }else{
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

