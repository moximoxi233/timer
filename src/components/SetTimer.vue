<template>
  <div >
    <p class="setTime">
      <span @click="hour=1">1</span>
      <span @click="hour=2">2</span>
      <span @click="hour=3">3</span>
      <span @click="hour=4">4</span>
      <span @click="hour=5">5</span>
    </p>
    <p class="time">
      <span v-if="hour<10">0{{hour}}</span>
      <span v-else>{{hour}}</span>
      <span>:</span>
      <span v-if="min<10">0{{min}}</span>
      <span v-else>{{min}}</span>
    </p>
    <p style="text-align: center">
      <button class="btn" @click="startTime" v-if="start">Start</button>
      <button class="btn"  @click="startTime" v-else>end</button>
    </p>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        setTime:0,
        hour:0,
        min:0,
        start:true,
        timeid:0
      }
    },
    methods:{
     startTime(){
       clearInterval(this.$store.state.mainTimeid)
       var mins=this.hour*60+this.min//分
        if(mins<=0){
         return false;
        }
       if(this.start&& mins>0){
         this.start=true;
         this.setTime=mins
         var that=this;
         that.timeid=setInterval(function () {
           mins-=1;
           that.hour=Math.floor(mins/60)
           that.min=mins%60;
           that.$store.state.mainTimeid=that.timeid;
           if(mins<=0){
             clearInterval(that.timeid)
             that.$store.state.setTime+=that.setTime;
           }
           that.$store.state.setTime+=1;
         },100)
       }else{
         clearInterval(this.timeid)
//         this.$store.state.setTime+=this.setTime-mins;
         this.$store.state.mainTimeid=0;

         console.log(this.$store.state.setTime);

       }
       this.start=!this.start
     }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .time{
    height: 250px;
    text-align: center;
    font-size: 100px;
    color: white;
    height: 100%;
    line-height: 220px;
  }
  .setTime{
    text-align: center;
  }
  .setTime span{
    display: inline-block;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
  }
  .btn{
    text-decoration: none;
    width: 70px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    display: inline-block;
    box-shadow:3px 4px 10px #1a314d;
    background-color: #5794c9;
    border-radius: 8px;
    border: none;
    font-size: 18px;
    color: white;
  }
</style>
