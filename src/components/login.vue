
<template>
  <div class="hello">
      <input placeholder="请输入用户名" type="text" v-model="user.name">
      <input placeholder="请输入密码" type="password" v-model="user.pass">
      <button @click="login">登录</button>
  </div>
</template>

<script>
import router from '../router/index'
import {dynamicRouters} from '../router/index'
export default {
  data () {
    return {
      user:{},
      code:200,
      
    }
  },
  methods:{
    login(){
      //省略调用后台接口
      let prilist ={
        privi1:"CD",
        privi2:"CRD"
      }
      if(this.code == 200){
        if(this.$route.query.redirect_path){
          let redirect = this.$route.query.redirect_path;
          if(this.user.name=='admin')
            window.localStorage.setItem('permissionList',JSON.stringify(prilist))
          else{
            window.localStorage.setItem('permissionList',['privi1'])
          }
          window.localStorage.setItem('user',this.user.name)
          window.localStorage.setItem('token','123456')
          let privilege = Object.keys(JSON.parse(localStorage.getItem('permissionList'))||{})
          //动态添加路由
          if(privilege && privilege.length>0){ 
              //用户已经登录
              const  permission_list  = privilege
              const allow_routes = dynamicRouters.filter((route)=>{ //过滤允许访问的路由
                return permission_list.includes(route.name); 
              })
              router.addRoutes(allow_routes)
          }

          this.$router.push(redirect)
        }else{    
          if(this.user.name=='admin')
            window.localStorage.setItem('permissionList',prilist)
          else{
            window.localStorage.setItem('permissionList',['privi1'])
          }
          window.localStorage.setItem('token','123456')
          this.$router.push({path:'/'})
        }
        window.localStorage.setItem('token',)
      }else{
        alert('验证失败，请重新填写密码！')
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
