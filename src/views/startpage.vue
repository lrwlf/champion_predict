<template>
  <div class="startpage">
    <div id = 'startpostion'>
      <router-link id='nextbutton' to='groupstage'>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'startpage',
  components: {
    
  },
}
</script>
<style>
.startpage {
    margin: 0;
    width: 100%;
    height: 100%;
    min-height: 500px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url('../assets/startpage.jpg');
    position: absolute;
}
#nextbutton {
    background-image: url('../assets/startbutton.png');
    background-size: 100%;
    background-repeat: no-repeat;
    width: 33.21%;
    height: 100%;
    display: inline-block;
}
#startpostion{
  height: 10.52%;
  width: 100%;
  bottom: 7%;
  position: absolute;
}

</style>
