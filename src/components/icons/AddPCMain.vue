<template>
<div class="main-bg">
            <div class="title-box">
                <p class="mini-title">Add</p>
                <p class="main-title">New Photocard</p>
            </div>
            <div class="add-pc-page">
                <p class="upload-image">Upload Your Image</p>
            </div>
            <div class="add-pc-blank"></div>
            <div class="add-pc-page">
                <p class="upload-image">Write The Information</p>
            </div>
            <div class="info-form">
                <form>
                    <input class="info-text" type="text" placeholder="  Member">
                    <input class="info-text" type="text" placeholder="  Album">
                    <input class="info-text" type="text" placeholder="  Album Version">
                    <input class="info-submit" type="button" value="Submit">
                </form>
            </div>
        </div>
  </template>
  
  <script>
  export default {
    name: 'AddPCMainComponent',
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
  
  .mini-title {
    font-size: 20px;
}

.main-title{
    font-size: 40px;
    color: #D87400;
}

.add-pc-page {
    display: flex;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50px 0px 50px 0px;
    background-color: #d87400;
    width: 295px;
    height: 67px;
}


.upload-image {
    width: 70%;
    font-size: 16px;
    margin-top: 7%;
    text-align: center;
}


.add-pc-blank {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px 10px 10px 10px;
    background-color: #ffffff;
    width: 161px;
    height: 155px;
}

.info-form {
    width: 80%;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
}

.info-text {
    font-family: "Open Sans";
    width: 100%;
    height: 50px;
    border-radius: 10px 10px 10px 10px;
    margin-bottom: 25px;
}

.info-submit {
    background-color: #c99a63;
    color: white;
    width: 100%;
    height: 50px;
    border-radius: 10px 10px 10px 10px;
    margin-bottom: 50px;
} 
  </style>