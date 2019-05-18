<template>
    <div>
        
    </div>
</template>
<script>
import axios from 'axios'
export default {
    created(){
        var url = '/champion_predict/update.php'
        axios.post(url,'id=-2')
        .then(resp=>{if(resp.data!='zy')this.$router.push('wrong')})
        .catch(error=>{console.log(error);this.$router.push('wrong')})
    }
}
</script>