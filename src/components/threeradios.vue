<template>
  <div class="threeradios">
    <div class='radioshead'>
      <img class="line" src="../assets/line.png">
      <h1>{{order}}</h1>
      <img class="line" src="../assets/line.png">
    </div>
    <div class="radio-box" v-for="(item,index) in radios" :key="item.id">
      <img v-lazy="item.path" class='iimg' :class="{'imgon':item.isChecked}" @click="check(index)">
      <h4 :class="{'texton':item.isChecked}">{{item.name}}</h4>
      <span @click="check(index)" class="radio" :class="{'on':item.isChecked} "></span>
      <input
        v-model="radio"
        :value="item.id"
        class="input-radio"
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
.iimg {
  width: 70%;
  margin-bottom:20px;
  margin-top:20px;
  filter: contrast(0.5);
}
.radio-box {
  display: inline-block;
  position: relative;
  line-height: 25px;
  width: 30%;
  height: 200px;
}
.radio {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-image: url("../assets/radio.png");
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 15px 15px;
}
.input-radio {
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
  height: 40px;
}
.texton{
  color:#774b2a;
}

.imgon{
    filter: contrast(1);
}
h1{
    color: #774b2a;
    letter-spacing: 40px;
    text-indent: 40px;
    font-size: 30px;
}
.radioshead .line{
  width:80%;
}
</style>