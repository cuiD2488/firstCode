<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button ></button>
    <router-link :to="'hello'">
      跳转
    </router-link>  
   <!-- <hello></hello> -->
  </div>
</template>
<script>
// import hello from './Hello.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome my po'
    }
  }
  // ,
  // components:{
  //  hello
  // }
}
</script>

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
