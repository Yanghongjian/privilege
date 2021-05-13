<template>
  <div class="hello">
    {{username}}
    1、登录权限<br/>
        不登录能看那个页面<br/>
      2、页面权限<br/>
        登陆后能看那些页面<br/>
      3、内容权限<br/>
        登录后页面中增删改查权限<br/>
    <router-link to="/needlogin">需登录页面</router-link>
    <router-link to="/notneed">无需登录页面</router-link>
    <router-link to="/privi1">权限1</router-link>
    <router-link to="/privi2">权限2</router-link>
    <router-link to="/privi3">权限3</router-link>
    <button @click="logout">退出登录</button>
  </div>
</template>

<script>
import {publicRouters} from '../router/index'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg:`
      1、登录权限<br/>
        不登录能看那个页面<br/>
      2、页面权限<br/>
        登陆后能看那些页面<br/>
      3、内容权限<br/>
        登录后页面中增删改查权限`,
        username:localStorage.getItem('user')
    }
  },
  methods:{
    logout(){
      // debugger
      window.localStorage.clear();
      this.$router.options.routes = publicRouters
      location.reload()
      this.$router('/')

      // router.push({ name: "Login" }); //跳转到登录页面
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
