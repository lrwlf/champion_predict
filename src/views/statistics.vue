<template>
    <div>
            <ul>
                <li v-for='item in datals' :key="item.key">{{item.uniname}}:&nbsp;&nbsp;&nbsp;{{item.times}}</li>
            </ul>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return {
            datals:[]
        }
    },
    methods:{
    },
    created(){
        var url = '/champion_predict/getdata.php'
        axios.get(url)
        .then(resp=>{
            console.log(resp.data)
            this.datals = resp.data
        })
        .catch(error=>{console.log(error)})    
    }
}
</script>