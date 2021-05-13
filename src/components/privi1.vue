<template>
  <div class="hello">
    <router-link to="/">返回</router-link>
    需要权限1才能看到该页面
    <div>
      <button v-permission="'C'">增</button>
      <button v-permission="'D'">删</button>
      <button v-permission="'U'">改</button>
      <button v-permission="'R'">查</button>
    </div>
   
  </div>
</template>

<script>
export default {
  data () {
    return {
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
