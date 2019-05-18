<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Source Han Sans CN', 'Microsoft YaHei';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: auto;
  width: 100%;
  min-height:100%;
  background:#f6deba;
  position: absolute
}
.rightleft{
  position:absolute;
  top:0;
  right:0;
  width: 33%;
  z-index:50;
}
.wave1{
    position:absolute;
    left: 0;
    top: 10%;
    width: 100%;
}
.wave2{
    position:absolute;
    left: 0;
    top: 20%;
    width: 40%;
}
.wave3{
    position:absolute;
    right: 0;
    top: 30%;
    width: 26%;
}
.wave4{
    position:absolute;
    left: 0;
    top: 45%;
    width: 26%;
}
.wave5{
    position: absolute;
    right: 0;
    top: 60%;
    width: 43%;
}

.titleimg{
  position:relative;
  width:66%;
  margin-top:50px;
  margin-bottom:30px;
}
.maincontent{
  background:#fef6e9;
  width:92%;
  margin:0 auto;
  border-right: solid 10px #c5beb4;
  padding-top:50px;
  padding-bottom: 50px;
}
.submit{
  margin:80px;
  border: none;
  outline: none;
  background: url('./assets/submit.png');
  background-repeat: no-repeat;
  background-size:100%;
  width: 160px;
  height: 68px;
}

</style>
