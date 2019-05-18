<template>
<div>
    <div class='headcontent'>
      <img class='rightleft' src="../assets/topright.png"/>
      <img class='wave1' src="../assets/wave1.png"/>
      <img class='wave2' src="../assets/wave2.png"/>
      <img class='titleimg' src="../assets/head3.png"/>
    </div>
    <div class="maincontent">
        <tworadios v-for='(item,index) in datals' :order='orderls[index]' :key="item.id" :data='item' v-model='nextls[index]' @change = 'pri'/>
    </div>
    <button class='submit' @click='nextpage'></button>
</div>
</template>

<script>
import tworadios from '../components/tworadios'
export default {
  data() {
    return {
      datals:[],
      nextls:[-1,-1,-1,-1,],
      orderls:['1/4决赛第一场','1/4决赛第二场','1/4决赛第三场','1/4决赛第四场'],
    };
  },
  methods: {
      pri(){
          console.log(this.nextls)
      },
      nextpage(){
        for (let i = 0; i < this.nextls.length; i++) {
          if(this.nextls[i]==-1){
            alert('请选择所有小组')
            return;
          }
      }
      console.log(this.nextls)
      this.$root.finalls = this.nextls
      this.$router.push('final')
      }
  },
  created(){
      console.log('quater');
      console.log(this.$root.quaterls);
      for (let i = 0; i < 4; i++) {
            var templs = [];
            templs[0] = this.alluni[this.$root.quaterls[2*i]]
            templs[1] = this.alluni[this.$root.quaterls[2*i+1]]
            this.datals.push(templs)
      }
  },
  components: {
    tworadios,
  }
};
</script>
<style scoped>
.maincontent{
  padding-bottom: 100px;
}
.wave1{
  top:30%;
}
.wave2{
  top:60%;
}
</style>
