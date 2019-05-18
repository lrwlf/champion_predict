<template>
    <div>
        <h1 v-show='loading'>
            正在生成冠军预测图···
        </h1>
        <h1 v-show='loading'>
            {{imgok/32*100|numFilter}}%
        </h1>
        <canvas ref="mycanvas" width="1300px" height="1720px" style='display:none'></canvas>
        <img src='../assets/showpic.jpg' ref='bgpic' @load='loadbg' style='display:none'/>
	    <img v-for='item in drawpicls' :src="name2path(unils[item].pathname)" @load='loadimg' :key="item.id" ref='pics' style='display:none'>
        <img id='showpic' :src='showpicsrc'/>
   </div>
</template>
<script>
export default {
    data() {
        return {
            canvas:{},
            unils:[],
            ctx:{},
            imgok:0,
            showpicsrc:'',
            drawpicls:[],
            loading:true,
            uname:[],
            msg : '',
            nickname:'',
        }
    },
    methods: {
        loadbg() {
            this.imgok++;
            if(this.imgok==32)
                this.startDraw()
        },
        loadimg() {
            this.imgok++;
            if(this.imgok==32)
                this.startDraw()
        },
        startDraw(){
            this.ctx.font = "bold 22px Microsoft YaHei";
            this.ctx.fillStyle = "#774b2a";
            this.ctx.drawImage(this.$refs.bgpic,0,0,1300,1720)
            var h = 0;
            for(let i = 0; i < 8; i++){
                this.ctx.drawImage(this.$refs.pics[i],120,370+h,90,90);
                var uy = 0;
                var mid = 82;
                for(let j = parseInt(this.uname[i].length/2); j < this.uname[i].length; ++j){
                    if(this.uname[i].length % 2 == 0)
                    this.ctx.fillText(this.uname[i][j],(mid+uy)*2,490+h);
                    else
                    this.ctx.fillText(this.uname[i][j],(mid+uy-5)*2,490+h);
                    uy += 12;
                }
                uy = -12;
                for(let j = parseInt(this.uname[i].length/2)-1; j >=0; --j){
                    if(this.uname[i].length % 2 == 0)
                    this.ctx.fillText(this.uname[i][j],(mid+uy)*2,490+h);
                    else 
                    this.ctx.fillText(this.uname[i][j],(mid+uy-5)*2,490+h);
                    uy -= 12;
                }
                h += 130;
            }
            h = 0;
            for(let i = 8; i < 16; i++){
                this.ctx.drawImage(this.$refs.pics[i],1100,370+h,90,90);
                var uy = 0;
                var mid = 574;
                for(let j = parseInt(this.uname[i].length/2); j < this.uname[i].length; ++j){
                    if(this.uname[i].length % 2 == 0)
                    this.ctx.fillText(this.uname[i][j],(mid+uy)*2,490+h);
                    else 
                    this.ctx.fillText(this.uname[i][j],(mid+uy-5)*2,490+h);
                    uy += 12;
                }
                uy = -12;
                for(let j = parseInt(this.uname[i].length/2)-1; j >=0; --j){
                    if(this.uname[i].length % 2 == 0)
                    this.ctx.fillText(this.uname[i][j],(mid+uy)*2,490+h);
                    else
                    this.ctx.fillText(this.uname[i][j],(mid+uy-5)*2,490+h); 
                    uy -= 12;
                }
                h += 130;
            }
            h = 0;
            for(let i = 16; i < 20; i++){
                this.ctx.drawImage(this.$refs.pics[i],163*2,215*2+h,45*2,45*2);
                h += 131*2;
            }
            h = 0;
            for(let i = 20; i < 24; i++){
                this.ctx.drawImage(this.$refs.pics[i],465*2,215*2+h,45*2,45*2);
                h += 131*2;
            }
            h = 0;
            for(let i = 24; i < 26; i++){
                this.ctx.drawImage(this.$refs.pics[i],192*2,278*2+h,45*2,45*2);
                h += 265*2;
            }
            h = 0;
            for(let i = 26; i < 28; i++){
                this.ctx.drawImage(this.$refs.pics[i],420*2,278*2+h,45*2,45*2);
                h += 265*2;
            }
            this.ctx.drawImage(this.$refs.pics[28],225*2,382*2,45*2,45*2);
            this.ctx.drawImage(this.$refs.pics[29],373*2,382*2,45*2,45*2);
            this.ctx.drawImage(this.$refs.pics[30],289*2,313*2,60*2,60*2);
            this.draw_word(this.msg)
            this.loading = false;
            this.ctx.font = "bold 38px Microsoft YaHei";
            this.ctx.fillText(this.nickname,160,1487);
            this.showpicsrc = this.canvas.toDataURL('image/png');
        },
        draw_word(s){
            this.ctx.fillStyle = "#774b2a";
            this.ctx.font = "36px Microsoft YaHei";
            var c = 80*2;
            var r = 770*2;
            for(let i = 0; i < s.length; ++i){
                this.ctx.fillText(s[i],c,r);
                c = c + 19*2;
                if(c > 410*2){c = 80*2; r += 22*2;}
                if(r == 836*2) break;
            }
            
        }

    },
    created() {
        this.unils = this.alluni;
        this.drawpicls = this.drawpicls.concat(this.$root.halfquaterls,this.$root.quaterls,this.$root.finalls,this.$root.battlels,this.$root.champion)
        // if(this.drawpicls.length==0) //调试使用
        // {
        //     this.drawpicls = [1,22,7,15,44,40,47,32,12,35,11,4,36,14,42,31,36,15,44,32,12,4,37,31,36,32,12,31,36,32,32]
        // }
        this.drawpicls.forEach(element => {
        //初始化uname
            this.uname.push(this.alluni[element].name) 
        });
        this.msg = this.$root.finalword;
        this.nickname = this.$root.nick+'的毒奶预测:';
        
    },
    mounted(){
        this.canvas = this.$refs.mycanvas;
        this.ctx = this.canvas.getContext("2d");
    },
    filters: {
        numFilter(value) {
        // 截取当前数据到小数点后两位
            let realVal = parseFloat(value).toFixed(2)
            return realVal
        }

    }
}
</script>
<style>

    #showpic{
        width:100%;
    }
</style>