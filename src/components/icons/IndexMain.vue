<template>
    <main>
    	    <header>
    		<img class="logo" alt="" src="https://i.postimg.cc/pXmhnbrL/Logo-atz.png"><p class="myatinydatabase">MyAtinyDataBase</p>
        </header>
        <section class="text-main">
        <div class="tittle-container">
            <p>The first database where <span class="you">YOU </span>have the control!</p></div>
            <div class="text-container">
            <br><p class="text1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium  nisi eget tempus efficitur. In ut nibh eget sem imperdiet vehicula.  Morbi convallis mauris at velit blandit sagittis. Donec non nisl  ullamcorper sem cursus condimentum. Sed varius sodales quam. </p></div>
            <RouterLink to="/dashboard"><button type="button" class="button-su">Sign up</button></RouterLink>
            <RouterLink to="/dashboard"><button onclick="on()" type="button" class="button">Login</button></RouterLink>
              <div class="login-page">
                <div class="form">
                    <form class="login-form" target="_blank">
                        <p class="lg">Get Started!</p>
                        <input type="text" required placeholder="Email" id="email" autocomplete="off" />
                        <input oninput="return formvalid()" type="password" required placeholder="Password" id="pass"
                            autocomplete="off" />
                        <img src="https://cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/hide-512.png"
                            onclick="show()" id="showimg">
                        <span id="vaild-pass"></span>
                        <button type="submit">Log in!</button>
                    </form>
                </div>
            </div>
        </section>
        <section class="details">
            <p class="t1">Keep up with the latest releases!</p>
			<div class="text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium  nisi eget tempus efficitur. In ut nibh eget sem imperdiet vehicula.  Morbi convallis mauris at velit blandit sagittis. Donec non nisl  ullamcorper sem cursus condimentum. Sed varius sodales quam, nec tempor  arcu vestibulum quis. In tristique sed lectus vitae tincidunt. Etiam sit  amet ultrices arcu. Suspendisse mollis, ipsum ut venenatis convallis,  orci massa varius dolor, vel malesuada orci justo sit amet orci. Cras  placerat rutrum facilisis. Nunc nec nulla libero. Ut vitae dui feugiat,  aliquam mi eget, elementum purus. Nulla facilisi. Nulla facilisi. Orci  varius natoque penatibus et magnis dis parturient montes, nascetur  ridiculus mus. Pellentesque eu felis eros.</div>
    		<br>
            <p class="t2">Trade, buy and sell!</p>
			<div class="cs-bg"></div>
    		<div class="coming-soon">Coming soon!</div>
    		<div class="text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium  nisi eget tempus efficitur. In ut nibh eget sem imperdiet vehicula.  Morbi convallis mauris at velit blandit sagittis. Donec non nisl  ullamcorper sem cursus condimentum. Sed varius sodales quam, nec tempor  arcu vestibulum quis. In tristique sed lectus vitae tincidunt. Etiam sit  amet ultrices arcu. Suspendisse mollis, ipsum ut venenatis convallis,  orci massa varius dolor, vel malesuada orci justo sit amet orci. Cras  placerat rutrum facilisis. Nunc nec nulla libero. Ut vitae dui feugiat,  aliquam mi eget, elementum purus. Nulla facilisi. Nulla facilisi. Orci  varius natoque penatibus et magnis dis parturient montes, nascetur  ridiculus mus. Pellentesque eu felis eros.</div>
    		<p class="t3">Ready to get started?</p>
            <div class="ca-bg">
      		    <div class="create">Create an account</div>
    		</div>
            <img class="buttons-icon" alt="" src="https://i.postimg.cc/ZKX987vF/Iconfb.png">
    		<img class="buttons-icon1" alt="" src="https://i.postimg.cc/FHcYDyjt/Iconig.png">
			<div class="all-rights-reserved">All rights reserved © 2024</div>
        </section>
    </main>
    <div id="overlay">
        <div class="login-page2">
            <div class="form2">
                <form class="login-form" target="_blank">
                    <p class="lg">Log in to your account!</p>
                    <input type="text" required placeholder="Email" id="email" autocomplete="off" />
                    <input type="password" required placeholder="Password" id="pass"
                        autocomplete="off" />
                    <span id="vaild-pass"></span>
                    <button type="submit">Log in!</button>
                </form>
                <img class="close" onclick="off()" src="https://static.vecteezy.com/system/resources/previews/021/815/763/original/cross-close-icon-free-png.png">
            </div>
        </div>
    </div>
</template>

<script>
    function formvalid() {
    var vaildpass = document.getElementById("pass").value;

    if (vaildpass.length <= 8 || vaildpass.length >= 20) {
        document.getElementById("vaild-pass").innerHTML = "Minimum 8 characters";
        return false;
    } else {
        document.getElementById("vaild-pass").innerHTML = "";
    }
    }

    function show() {
    var x = document.getElementById("pass");
    if (x.type === "password") {
        x.type = "text";
        document.getElementById("showimg").src =
        "https://static.thenounproject.com/png/777494-200.png";
    } else {
        x.type = "password";
        document.getElementById("showimg").src =
        "https://cdn2.iconfinder.com/data/icons/basic-ui-interface-v-2/32/hide-512.png";
    }
    }

    function on() {
    document.getElementById("overlay").style.display = "block";
    };

    function off() {
    document.getElementById("overlay").style.display = "none";
    };
</script>

<style scoped>

html {
    scrollbar-color: #D87400 #ebb353;
    scrollbar-width: thin;
  }

main{
    background-image: url(https://i.postimg.cc/2yK1XTcY/bgtop.png), linear-gradient(180deg, #000, #c99a63);
    background-size: 100%;
    background-repeat: no-repeat;
    font-family: "Open Sans";
}

header, .text-main, .details {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    color: white;
    font-family: "Open Sans";
}

.myatinydatabase {
    display: flex;
    float: left;
    margin-top: 13%;
    margin-left: 4%;
    font-size: 1.60em;
    font-weight: bold;
    font-family: MuseoModerno;
}

.logo {
    display: flex;
    float: left;
    margin-top: 10%;
    width: 15%;
}

.button {
    display: inline-block;
    margin-top: 10%;
    margin-left: 10%;
    border-radius: 8px;
    border-color: #000;
    background-color: #000;
    align-items: center;
    padding: 24px;
    color: #fff;
    font-family: "Open Sans";
}

.button:hover, .button-su:hover {
    background-color: #c99a63;
    color: #fff;
}

.button-su {
    display: inline-block;
    margin-left: 10%;
    margin-top: -5%;
    border-radius: 8px;
    border-color: #000;
    background-color: #000;
    align-items: center;
    padding: 24px;
    color: #fff;
    font-family: "Open Sans";
}

.tittle-container {
    padding-top: 40%;
    margin-left: 10%;
    font-family: "Open Sans";
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    line-height: 50px;
    width: 80%;
    color: #fff;
}

.you {
    color: #D87400;
}

.text1 {
    font-weight: bold;
    color: #fff;
}

.text-container {
    padding-top: 5%;
    margin-left: 10%;
    font-family: "Open Sans";
    text-align: center;
    font-size: 14px;
    line-height: 166%;
    display: flex;
    width: 80%;
}

.login-page, .form, .form img, .form input, .form button {
    display: none;
}

.lg {
    font-family: "Open Sans";
    color: #D87400;
    font-size: 24px;
    text-align: center;
    font-weight: bold;
}

.t1 {
    color: #fff;
    font-size: 36px;
    font-weight: bold;
    font-family: MuseoModerno;
    margin-top: 15%;
    text-align: center;
}

.text2 {
    margin-left: 10%;
    font-size: 15px;
    width: 80%;
    font-weight: bold;
    text-align: center;
}

.t2 {
    color: #fff;
    font-size: 36px;
    font-weight: bold;
    font-family: MuseoModerno;
    text-align: center;
}

.cs-bg{
    border-radius: 20px;
    background-color: #d87400;
    margin-left: 30%;
    width: 119px;
    height: 25px;
}

.coming-soon {
    margin-left: 35%;
    margin-top: -7%;
    margin-bottom: 20px;
    font-size: 13px;
    font-weight: bold;
    color: #fff;
    font-family: "Open Sans";
}

.t3 {
    margin-top: 2%;
    text-align: center;
    color: #fff;
    font-size: 36px;
    font-weight: bold;
    font-family: MuseoModerno;
}

.ca-bg {
    margin-left: 10%;
    border-radius: 8px;
    background-color: #d87400;
    width: 80%;
    padding: 14px 24px;
}

.ca-bg:hover {
    background-color: #c99a63;
    color: #fff;
}

.createlink {
    text-align: center;
    color: white;
    font-weight: bold;
    text-decoration: none;
}

.createlink:hover {
    text-align: center;
    color: white;
    font-weight: bold;
    text-decoration: none;
}

.buttons-icon {
    display: inline-block;
    margin-top: 10%;
    margin-left: 40%;
    width: 40px;
    height: 40px;
}

.buttons-icon1 {
    display: inline-block;
    margin-top: 10%;
    width: 40px;
    height: 40px;
}
.all-rights-reserved {
    margin-left: 20%;
    margin-top: 5%;
    padding-bottom: 10%;
    color: #fff;
    font-weight: bold;
}

#overlay {
    position: fixed;
    display: none;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.75);
  }

  .login-page2 {
    margin-top: 70%;
    height: 300px;
    margin-left: 0%;
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .form2 {
    position: relative;
    filter: drop-shadow(0 0 2px #000000);
    border-radius: 50px 0px 50px 0px;
    width: 450px;
    height: 370px;
    background-color: #000000;
    padding: 40px;
  }
  
  .form2 input {
    outline: 0;
    background: #f2f2f2;
    border-radius: 20px;
    width: 100%;
    border: 0;
    margin: 15px 0;
    padding: 15px;
    font-size: 14px;
  }
  
  .form2 input:focus {
    box-shadow: 0 0 10px 0 #D87400;
  }
  
  .form2 button {
    outline: 0;
    background: #D87400;
    width: 100%;
    border: 0;
    margin-top: 10px;
    border-radius: 3px;
    padding: 15px;
    color: #ffffff;
    font-size: 15px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
  }
  
  .form2 button:hover,
  .form2 button:active,
  .form2 button:focus {
    background: #c99a63;
    color: #fff;
  }

.close {
    position: absolute;
    top: 20px;
    left: 350px;
    width: 20px;
    height: 20px;
}

@media screen and (min-width: 600px){
    .myatinydatabase {
        margin-top: 8%;
        margin-left: 4%;
        font-size: 2.5em;
    }

    .logo {
        margin-top: 8%;
        margin-left: 2%;
        width: 10%;
    }

    .tittle-container {
        padding-top: 30%;
    
    }

    .button {
        margin-left: 20%;
    }
    
    .button-su {
        margin-left: 20%;
    }

    .login-page2 {
        margin-top: 50%;
      }

    .text-container {
        padding-top: 2%;
        margin-left: 10%;
    }

    .t1 {
        font-size: 36px;
        margin-top: 10%;
    }

    .text2 {
        font-size: 15px;
    }

    .t2 {
        font-size: 36px;
    }

    .cs-bg{
        margin-left: auto;
        margin-right: auto;
    }

    .coming-soon {
        margin-left: 41%;
        margin-top: -4.5%;
        font-size: 13px;
    }

    .t3 {
        margin-top: 2%;
    }

    .ca-bg {
        margin-left: auto;
        margin-right: auto;
    }

    .buttons-icon {
        display: inline-block;
        margin-top: 5%;
        margin-left: 43%;
    }
    
    .buttons-icon1 {
        display: inline-block;
        margin-top: 5%;
    }

    .all-rights-reserved {
        margin-left: 30%;
    }

    .close {
        left: 415px;
      }
}

@media screen and (min-width: 1300px){
    .myatinydatabase {
        margin-top: 6%;
        margin-left: 1%;
        font-size: 3em;
    }

    .logo {
        margin-top: 4%;
        width: 7%;
    }

    .button {
        float: right;
        margin-top: -25%;
        border-radius: 8px;
        padding: 14px 24px;
    }

    .button-su {
        display: none;
    }

    .tittle-container {
        padding-top: 15%;
        margin-left: 3%;
        text-align: left;
        font-size: 48px;
        font-weight: bold;
        line-height: 70px;
        width: 713px;
        height: 117px;
        color: #000;
    }

    .you {
        font-size: 48px;
        color: #fff;
    }

    .text-container {
        padding-top: 10%;
        margin-left: 3%;
        font-family: "Open Sans";
        text-align: left;
        font-size: 20px;
        line-height: 166%;
        display: flex;
        width: 680px;
        height: 214px;
    }

    .login-page {
      display: block;
      margin-top: -225px;
      height: 400px;
      margin-left: 60%;
      width: 40%;
      align-items: center;
      display: flex;
      justify-content: center;
    }
    
    .lg {
        margin-top: -10px;
    }    

    .form {
      display: block;
      position: relative;
      filter: drop-shadow(0 0 2px #000000);
      border-radius: 50px 0px 50px 0px;
      width: 420px;
      height: 330px;
      background-color: #000000;
      padding: 40px;
    }
    
    .form img {
      display: block;
      position: absolute;
      height: 20px;
      top: 175px;
      right: 60px;
      cursor: pointer;
    }
    
    .form input {
      display: block;
      outline: 0;
      background: #f2f2f2;
      border-radius: 20px;
      width: 100%;
      border: 0;
      margin: 18px 0;
      padding: 15px;
      font-size: 14px;
    }
    
    .form input:focus {
      box-shadow: 0 0 10px 0 #D87400;
    }
    
    span {
      color: red;
      margin: 2px 0;
      font-size: 12px;
    }
    
    .form button {
      display: block;
      outline: 0;
      background: #D87400;
      width: 100%;
      border: 0;
      margin-top: 15px;
      border-radius: 3px;
      padding: 15px;
      color: #ffffff;
      font-size: 15px;
      -webkit-transition: all 0.3 ease;
      transition: all 0.4s ease-in-out;
      cursor: pointer;
    }
    
    .form button:hover,
    .form button:active,
    .form button:focus {
      background: #c99a63;
      color: #fff;
    }

    .t1 {
        text-align: left;
        font-size: 36px;
        margin-left: 3%;
        margin-top: 5%;
    }

    .text2 {
        margin-left: 40%;
        font-size: 15px;
        text-align: left;
        width: 60%;
    }

    .t2 {
        text-align: left;
        margin-left: 3%;
        font-size: 36px;
    }

    .cs-bg{
        margin-left: 3%;
    }

    .coming-soon {
        margin-left: 4%;
        margin-top: -1.5%;
    }

    .ca-bg {
        width: 376px;
    }

    .buttons-icon {
        margin-top: 5%;
        margin-left: 47%;
    }
    
    .buttons-icon1 {
        margin-top: 5%;
    }

    .all-rights-reserved {
        margin-left: 43%;
        margin-top: 2%;
        padding-bottom: 5%;
    } 

      .login-page2 {
        margin-top: 15%;
      }

      .close {
        left: 410px;
      }
}

</style>