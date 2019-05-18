<template>
<div>
    <div class='headcontent'>
      <img class='rightleft' src="../assets/topright.png"/>
      <img class='titleimg' src="../assets/head2.png"/>
      <img class='wave1' src="../assets/wave1.png"/>
      <img class='wave2' src="../assets/wave2.png"/>
      <img class='wave3' src="../assets/wave3.png"/> 
      <img class='wave4' src="../assets/wave4.png"/>
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
      nextls:[-1,-1,-1,-1,-1,-1,-1,-1,],
      orderls:['1/8决赛第一场','1/8决赛第二场','1/8决赛第三场','1/8决赛第四场','1/8决赛第五场','1/8决赛第六场','1/8决赛第七场','1/8决赛第八场',]
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
      this.$root.quaterls = this.nextls
      this.$router.push('quater')
      }
  },
  created(){
      console.log('halfquater');
      console.log(this.$root.halfquaterls);
      for (let i = 0; i < 8; i++) {
            var templs = [];
            templs[0] = this.alluni[this.$root.halfquaterls[2*i]]
            templs[1] = this.alluni[this.$root.halfquaterls[2*i+1]]
            this.datals.push(templs)
      }
  },
  components: {
    tworadios,
  }
};
</script>
<style scoped>
.wave1{
  top:20%;
}
.wave2{
  top:40%;
}
.wave3{
  top:60%;
}
.wave4{
  top:80%;
}
.maincontent{
  padding-bottom: 100px;
}
</style>
