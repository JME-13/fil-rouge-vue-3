<template>
  <main>
    <MADBHeader />
      <MainBG />
    <MADBFooter />
  </main>
</template>
  
  <script>
  import MainBG from './icons/MainBG.vue';
  import MADBHeader from './icons/MADBHeader.vue';
  import MADBFooter from './icons/MADBFooter.vue';
  
  export default {
    name: 'MainBGComponent',
    components: {
        MainBG,
        MADBHeader,
        MADBFooter,
    },
  }
  </script>