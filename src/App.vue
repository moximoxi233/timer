<template>
  <div id="app">
    <div class="header">
      <input type="text" value="hhh" v-model="title" max="10">
    </div>
   <div class="container">
     <div class="content">
       <router-view></router-view>
     </div>
     <nav class="footer">
      <router-link class="router" to="/timer" @click.prevent="eventpre">timer</router-link>
      <router-link class="router" to="/setTimer">setTimer</router-link>
      <router-link class="router" to="/complate">complate</router-link>
      <!--<router-link>3333</router-link>-->
     </nav>
   </div>
  </div>
</template>

<script>
export default {
data(){
  return{
    title:'wangbichiの自习室',

  }
},
  methods:{
  eventpre(f){
    if(f){
      alert("jjj")
    }else {return false}
  }
  }

}
</script>

<style scoped>
.container{
  margin: 50px auto;
  width: 500px;
  height: 400px;
  background-color: #496f94;
  display: flex;
  flex-direction: column;
 justify-content: flex-end;
  border-radius: 14%;
  box-sizing: border-box;
  padding: 2% 4%;
}
.header{
  margin: 30px auto;
  width: 600px;
  height: 110px;
  border-radius: 16px;
  overflow: hidden;
  background-color: antiquewhite;
}
.header input{
  text-align: center;
  width: 600px;
  height: 110px;
  background-color: #eed38c;
  font-size: 36px;
  font-weight: 600;
  border: none;
  font-family: 华文新魏;
  color: #6e88a2;
}
.content{
  width: 100%;
  flex: 1;
  height: 100%;
  /*overflow: hidden;*/
}
.footer{
  padding: 0 20px;
height: 30px;
  display: flex;
  justify-content: space-around;
  }
  .router{
    color: white;
    text-decoration: none;
    width: 80px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    display: inline-block;
    background-color: #23496e;
   border-radius: 8px;
    box-shadow:3px 4px 10px #1a314d;
  }
</style>
