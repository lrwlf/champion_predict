<template>
<div>
    <div class='headcontent' v-show='!show'>
      <img class='rightleft' src="../assets/topright.png"/>
      <img class='wave1' src="../assets/wave1.png"/>
      <img class='titleimg' src="../assets/head5.png"/>
    </div>
    <div class="maincontent" v-show="!show">
        <tworadios v-for='(item,index) in datals' :key="item.id" order='决   赛' :data='item' v-model='nextls[index]' @change = 'pri'/>
    </div>
    <button class='submit' @click='showpage' v-show="!show"></button>
    <div class='ask' v-show = 'show'>
            <span>请输入您的昵称:</span><br>
            <input type="text" class="nick" v-model="nickname"><br>
            <span>请输入您的毒奶宣言(50字以内)</span><br>
            <textarea class = 'word' rows="3" cols="20" v-model = 'word' />
            <button class='finalbutton' @click='nextpage'>生成预测图</button>
    </div>
</div>
</template>

<script>
import tworadios from '../components/tworadios'
import axios from 'axios'
export default {
  data() {
    return {
      datals:[],
      nextls:[-1,-1],
      show:false,
      word:'',
      nickname:'',
    };
  },
  methods: {
      pri(){
          console.log(this.nextls)
      },
      postchampion(id){
        var url = '/champion_predict/update.php'
        axios.post(url,'id='+id)
        .then(resp=>{console.log(resp)})
        .catch(error=>{console.log(error)})
      }
      ,
      showpage(){
        for (let i = 0; i < this.nextls.length; i++) {
          if(!this.nextls[i]==-1){
            alert('请选择所有小组')
            return;
            }
          }
        console.log(this.nextls)
        this.$root.champion = this.nextls[0]
        this.postchampion(this.nextls[0])   //统计冠军
        this.show = true
      },
      nextpage(){
        if(this.word.length>50)
        {
          alert('字数超过限制')
          return
        }
        this.$root.finalword = this.word;
        this.$root.nick = this.nickname;
        this.$router.push('showpic');   
      }
  },
  created(){
      console.log('battle');
      console.log(this.$root.battlels);
      for (let i = 0; i < 1; i++) {
            var templs = [];
            templs[0] = this.alluni[this.$root.battlels[2*i]]
            templs[1] = this.alluni[this.$root.battlels[2*i+1]]
            this.datals.push(templs)
      }
  },
  mounted(){

  },
  components: {
    tworadios,
  }
};
</script>
<style scoped>
    .ask{
        position:absolute;
        margin:auto;
        top:0;
        right:0;
        bottom:0;
        left:0;
        height:420px;
        width:350px;
        background:#ffffff;
        border-radius:20px 20px;
    }
    .finalbutton{
      margin-top: 20px;
      width: 200px; /* 宽度 */
      height: 40px; /* 高度 */
      border-width: 0px; /* 边框宽度 */
      border-radius: 3px; /* 边框半径 */
      background: #1E90FF; /* 背景颜色 */
      cursor: pointer; /* 鼠标移入按钮范围时出现手势 */
      outline: none; /* 不显示轮廓线 */
      font-family: Microsoft YaHei; /* 设置字体 */
      color: white; /* 字体颜色 */
      font-size: 17px; /* 字体大小 */
    }
    .ask span{
      display: inline-block;
      text-align: center;
      font-size: 17px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .word{
      width: 250px;
      height: 200px;
      font-size: 15px;
    }
    .maincontent{
      padding-bottom: 100px;
    }
    .wave1{
      top:50%;
    }
    .nick{
      height: 20px;
      width: 200px;
    }
</style>