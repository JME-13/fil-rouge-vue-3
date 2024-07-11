<template>
    <div class="main-bg">
      <div class="title-box">
        <p class="main-title-white">Your Collection</p>
      </div>
      <div class="collection-block">
        <img class="clt-img" src="https://i.postimg.cc/gJ9hXYrn/IconCD.png" />
        <br>
        <p class="collection-text">Albums</p>
      </div>
      <br>
      <br>
      <div class="collection-block">
        <img class="clt-img2" src="https://i.postimg.cc/28jZB9jF/IconPc.png" />
        <br>
        <p class="collection-text">Photocards</p>
      </div>
      <br>
      <br>
      <br>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CollectionMainComponent',
  }
  </script>
  
  <style scoped>
  .main-bg {
    float: center;
    border-radius: 50px 0px 50px 0px;
    background-color: #000;
    margin-left: auto;
    margin-right: auto;
    padding-top: 50px;
    width: 95%;
    font-family: "MuseoModerno";
    font-weight: bold;
    color: #ffffff;
  }
  
  .title-box {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  
  .main-title-white {
    font-size: 40px;
    color: #ffffff;
    margin-bottom: 20px;
  }
  
  .collection-block {
    margin-left: auto;
    margin-right: auto;
    border-radius: 50px 0px 50px 0px;
    background-color: #D3B087;
    width: 258px;
    height: 180px;
  }
  
  .clt-img {
    margin-left: 35%;
    margin-top: 20px;
    width: 89px;
    height: 95px;
  }
  
  .clt-img2 {
    margin-left: 38%;
    margin-top: 30px;
    width: 70px;
    height: 77px;
  }
  
  .collection-text {
    font-size: 36px;
    text-align: center;
  }
  </style>