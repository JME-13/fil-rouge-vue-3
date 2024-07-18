<template>
    <header><RouterLink to="/dashboard">
      <img class="MADBLogo" alt="" src="https://i.postimg.cc/pXmhnbrL/Logo-atz.png">
        <p class="MADBText">MyAtinyDataBase</p>
      </RouterLink>
      <nav class="menu">
        <router-link
          v-for="link in links"
          :key="link.href"
          :to="link.href"
          class="nav-link">
          <img :src="link.imgSrc" class="main-menu" :alt="link.alt">
        </router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'MADBHeader',
    data() {
      return {
        links: [
          { href: '/collection', imgSrc: 'https://i.postimg.cc/Wz8qHg8k/Icon-Albums.png', alt: 'collection' },
          { href: '/artist', imgSrc: 'https://i.postimg.cc/QNJ7CZDd/Icon-Micro.png', alt: 'artist' },
          { href: '/browse', imgSrc: 'https://i.postimg.cc/JzGHpyks/Icon-Search.png', alt: 'browse' },
          { href: '/account', imgSrc: 'https://i.postimg.cc/mkBFj8Y4/Icon-Account.png', alt: 'filter' }
        ]
      }
    }
  }

  </script>
  
  <style scoped>
    header {
        width: 75%;
        margin-left: auto;
        margin-right: auto;
        color: white;
        font-family: "Open Sans";
    }

    .MADBText {
        display: flex;
        float: left;
        margin-top: 13%;
        margin-left: 4%;
        font-size: 1.60em;
        font-weight: bold;
        font-family: MuseoModerno;
        color: white;
    }

    .MADBLogo {
        display: flex;
        float: left;
        margin-top: 10%;
        width: 15%;
    }

    .menu {
      width: 100%;
      display: flex;
      flex-direction: row;
    }

    .main-menu {
      display: flex;
      flex-direction: row;
      padding: 10px;
      margin-top: 10px;
      margin-bottom: 20px;      
    }

    @media screen and (min-width: 600px){
    .MADBText {
        margin-top: 8%;
        margin-left: 5%;
        font-size: 2.5em;
    }

    .MADBLogo {
        margin-top: 8%;
        margin-left: 4%;
        width: 10%;
    }

    .main-menu {
        margin-top: 20px;
        margin-bottom: 20px;
        padding-left: 30px;
        padding-right: 30px;
    }
    }

    @media screen and (min-width: 800px){
        header {
        width: 70%;
    }
    
        .MADBText {
        margin-top: 8%;
        margin-left: 4%;
        font-size: 2.5em;
    }

    .MADBLogo {
        margin-top: 8%;
        margin-left: 15%;
        width: 10%;
    }

    .menu {
        display: flex;
        width: 25%;
        padding-top: 20px;
        margin-left: 70px;
    }

    .main-menu {
        margin-top: 20px;
        margin-bottom: 20px;
        padding-left: 30px;
        padding-right: 30px;
    }
    }
    
    @media screen and (min-width: 1300px){
    .MADBText {
        margin-top: 2%;
        margin-left: -1%;
        font-size: 3em;
    }

    .MADBLogo {
        margin-top: 2%;
        margin-left: -100px;
        width: 5%;
    }

    .menu {
        display: flex;
        justify-content: center;
        width: 25%;
        padding-top: 20px;
        margin-left: 75%;
    }

    .main-menu {
        margin-top: 10px;
        margin-bottom: 20px;
        padding-left: 50px;
        padding-right: 50px;
    }
}
  </style>