<template>
<div>
    <div class='headcontent'>
      <img class='rightleft' src="../assets/topright.png"/>
      <img class='wave1' src="../assets/wave1.png"/>
      <img class='wave2' src="../assets/wave2.png"/>
      <img class='wave3' src="../assets/wave3.png"/>  
      <img class='wave4' src="../assets/wave4.png"/>
      <img class='wave5' src="../assets/wave5.png"/>
      <img class='titleimg' src="../assets/head1.png"/>
    </div>
    <div class="maincontent">
        <threeradios v-for='(item,index) in datals' :order='orderls[index]' :key="item.id" :data='item' v-model='nextls[index]' />
    </div>
    <button class='submit' @click = 'nextpage'></button>
</div>
</template>
<script>
import threeradios from "../components/threeradios"
import axios from 'axios'

export default {
  data() {
    return {
      datals:[],
      nextls:[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,],
      orderls:[],
    };
  },
  methods: {
    nextpage(){
      for (let i = 0; i < this.nextls.length; i++) {
          if(this.nextls[i]==-1){
            alert('请选择所有小组')
            return;
          }
      }
      console.log(this.nextls)
      this.$root.halfquaterls = this.nextls
      this.$router.push('halfquater')
    }
  },
  created(){
    this.groupls.forEach(element => {
      var templs=[];
      element.forEach(item => {
        templs.push(this.alluni[item])
      });
      this.datals.push(templs)
    });
    for(var i=0;i<17;i++){    
      this.orderls.push(String.fromCharCode(65+i)+'组')
    }
    
  },
  mounted(){
        var url = '/champion_predict/update.php'
        axios.post(url,'id=-1')
        .then(resp=>{if(resp.data!='zy')this.$router.push('wrong')})
        .catch(error=>{console.log(error);this.$router.push('wrong')})
  },
  components: {
    threeradios
  }
};
</script>
<style>

</style>
