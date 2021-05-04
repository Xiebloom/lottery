<template>
  <div id="app">
    <div id="nav">
      <a href="javascript:;" @click="jumpto(33,6,16,1,1)" :class="{active: isActive1}">双色球</a>
      <a href="javascript:;" @click="jumpto(35,5,12,2,2)" :class="{active: isActive2}">大乐透</a>
    </div>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive1 : false,
      isActive2 : false
    }
  },
  methods: {
    jumpto (redBall, redLimit, blueBall, blueLimit,model) {
      // 路由跳转
      if( !(this.isActive1 ^ (model - 1)) ) {
        this.$router.push({
          path:'/model',
          query:{
            redBall: redBall,
            redLimit: redLimit,
            blueBall: blueBall,
            blueLimit: blueLimit
          }
        })    
      }
      // css 变更
      if(model == 1) {
        this.isActive1 = true;
        this.isActive2 = false
      } else {
        this.isActive2 = true;
        this.isActive1 = false        
      }
    },
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border: 3px black solid;
  min-width: 300px;
}

#nav {
  padding: 10px;
  display: flex;
  justify-content: space-around;
}

#nav a {
  display: inline-block;
  width: 50%;
  height: 40px;
  line-height: 40px;
  background-color: pink;
  font-weight: bold;
  color: #2c3e50;
}
#nav a.active {
  border-bottom: 3px solid tomato ;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
