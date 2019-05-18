
<template>
  <div class="threeradios">
    <div class='radioshead'>
      <img class="line" src="../assets/line.png">
      <h1>{{order}}</h1>
      <img class="line" src="../assets/line.png">
    </div>
    <div class="radio-box1" v-for="(item,index) in radios" :key="item.id">
            <span v-if = '(index+1)%2!=0' @click="check(index)" class="radio1 radlf" :class="{'on':item.isChecked}"></span>
            <img v-lazy="item.path" class='iimg' :class="{'imgon':item.isChecked}" @click="check(index)">
            <span v-if = '(index+1)%2==0' @click="check(index)" class="radio1 radrg" :class="{'on':item.isChecked}"></span>
      <h4 class='h4name' :class="{'texton':item.isChecked}">{{item.name}}</h4>
      <input
        v-model="radio"
        :value="item.id"
        class="input-radio1"
        :checked="item.isChecked"
        @click="check(index)"
        type="radio"
      >
    </div>
  </div>
</template>
<script>
//此组件v-model仅可向外传值
export default {
  data() {
    return {
      radio: -1 ,
      radios: []
    };
  },
   props: {
    data: Array,
    order: String,
  },
  created(){
    this.radios = JSON.parse(JSON.stringify(this.data));
    this.radios.forEach(element => {
      element.isChecked = false;
      element.path = this.name2path(element.pathname);
    });
  },
  methods: {
    check(index) {
      // 先取消所有选中项
      this.radios.forEach(item => {
        item.isChecked = false;
        item.path = this.name2path(item.pathname)
      });
      //再设置当前点击项选中
      this.radio = this.radios[index].id;
      //设置值，以供传递
      this.radios[index].isChecked = true;
      this.$emit('input',this.radio);
      this.$emit('change');
    }
  }
};
</script>
<style scoped>
.radlf{
    left:0;
}
.radrg{
    right:0;
}
.iimg {
  width: 70%;
  margin-bottom:10px;
  margin-top:20px;
  filter: contrast(0.5);
}
.threeradios{
  padding-top: 20px;
}
.radio-box1 {
  display: inline-block;
  position: relative;
  line-height: 25px;
  width: 40%;
  height: auto;
}
.radio1 {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-image: url("../assets/radio.png");
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 15px 15px;
  position:absolute;
  top: 0;
  bottom: 0;
  margin:auto;
}
.input-radio1 {
  display: none;
}
.on {
  background-image: url("../assets/radiochecked.png");
}
h4{
  color:#98703d;
  font-family: 'Source Han Sans CN', 'Microsoft YaHei';
  font-size: small;
  line-height: normal;
}
.h4name{
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
}
.texton{
  color:#774b2a;
}
.imgon{
    filter: contrast(1);
}
.radioshead .line{
  width:80%;
}
h1{
    color: #774b2a;
    font-size: 30px;
    margin: 5px;
}
</style>
