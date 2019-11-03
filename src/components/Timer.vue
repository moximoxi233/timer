<template>
  <div >
    <p class="time">
      <span v-if="hour<10">0{{hour}}</span>
      <span v-else>{{hour}}</span>
      <span>:</span>
      <span v-if="min<10">0{{min}}</span>
      <span v-else>{{min}}</span>
    </p>
    <p style="text-align: center">
      <button class="btn" @click="startTimer" v-if="start">Start</button>
      <button class="btn"  @click="startTimer" v-else>end</button>
    </p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      hour:0,
      min:0,
      start:true,
      timeid:0
    }
  },
  methods:{
      startTimer () {
        clearInterval(this.$store.state.mainTimeid)
      if(this.start){
        var that=this;
        this.timeid=setInterval(function () {
          that.min+=1;
          if(that.min>=60){
            that.hour+=Math.floor(that.min/60);
            that.min=that.min%60;
          }
          that.$store.state.timer+=1;
          console.log(that.$store.state.timer);
          that.$store.state.mainTimeid=that.timeid;
        },100);
      }
      else {
        clearInterval(this.timeid)
//        this.$store.state.timer+=this.hour*60+this.min;
        console.log(this.$store.state.mainTimeid=0);

      }
        this.start=!this.start;
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.time{
  height: 280px;
  text-align: center;
  font-size: 100px;
  color: white;
  height: 100%;
  line-height: 250px;
}
.btn{
  text-decoration: none;
  width: 70px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  display: inline-block;
  border-radius: 8px;
  box-shadow:3px 4px 10px #1a314d;
  background-color: #5794c9;
  border: none;
  font-size: 18px;
  color: white;
}
  /*.time span{*/
    /*margin: -13px;*/
  /*}*/
</style>
