<template>
    <div class="main-bg">
      <div class="add-pc">
                <img class="add-file-icon" alt="" src="https://i.postimg.cc/XYmGmVfQ/IconFile.png">
                <br>
                <p class="add-new">Add new Photocard</p>
            </div>
            <div class="line-div"></div>
            <p class="latest-addition">Latest addition</p>
                <div class="rectangle-div"></div>
                    <img class="last-pc" alt="" src="...">
                <div class="line-div"></div>
            <p class="news">News</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MainBG'
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

      .add-pc {
      display: flex;
      justify-content: center;
      margin-left: auto;
      margin-right: auto;
      border-radius: 50px 0px 50px 0px;
      background-color: #d87400;
      width: 248px;
      height: 272px;
  }

  .add-file-icon {
      margin-left: 18%;
      margin-top: 50px;
    width: 100px;
    height: 100px;
  }

  .add-new {
      width: 70%;
      margin-top: 160px;
      margin-left: -55%;
      font-size: 25px;
      text-align: center;
  }

  .line-div {
      margin-top: 50px;
      margin-bottom: 50px;
      margin-left: auto;
      margin-right: auto;
      border-top: 1px solid #fff;
      width: 80%;
      height: 1px;
  }

  .latest-addition {
    margin-left: 45px;
    margin-bottom: 45px;
  	font-size: 35px;
}

.rectangle-div {
    margin-left: auto;
    margin-right: auto;
    border-radius: 50px 0px 50px 0px;
    background: linear-gradient(180deg, #242424, #000);
    width: 250px;
    height: 257px;
}

.news {
    margin-left: 130px;
    margin-bottom: 20px;
  	font-size: 35px;
}

@media screen and (min-width: 800px){
    .latest-addition {
        margin-left: 33%;
        margin-bottom: 45px;
        font-size: 35px;
    }
    
    .news {
        margin-left: 45%;
        margin-bottom: 20px;
        font-size: 35px;
    }
  }
  
@media screen and (min-width: 1300px){
  .latest-addition {
        margin-left: 43%;
    }

    .news {
        margin-left: 47%;
    }
  }
</style>