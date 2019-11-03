<template>
  <div >
    <p class="info">
      <button class="btn" v-if="flag" @click="format">点击查看今日学习时间</button>
      <span class="result"  v-else>今天一共学习了{{tatalTime}}小时^-^</span>
    </p>
    <!--<p class="info" v-else></p>-->
  </div>
</template>

<script>
  export default {
    data(){
      return {
       flag:true,
        tatalTime:0
      }
    },
    methods:{
    format(){
      clearInterval(this.$store.state.mainTimeid)

      this.$store.commit('sum')
      console.log(this.$store.state.tatalTime);
      this.tatalTime=Math.floor(this.$store.state.tatalTime*10/60)/10;
      this.flag=!this.flag;
    }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.info{
 text-align: center;
}
.btn{
  text-decoration: none;
  width: 220px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  display: inline-block;
  background-color: #395270;
  border-radius: 8px;
  border: none;
  font-size: 18px;
  color: white;
  box-shadow:3px 4px 10px #1a314d;
}
  .result{
    display: inline-block;
    text-align: center;
    font-size: 20px;
    color: white;
    height: 200px;
    line-height:200px;

  }
</style>
