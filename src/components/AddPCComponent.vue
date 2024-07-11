<template>
    <main>
      <MADBHeader />
      <AddPCMainComponent />
      <MADBFooter />
    </main>
  </template>
  
  <script>
  import AddPCMainComponent from './icons/AddPCMain.vue';
  import MADBHeader from './icons/MADBHeader.vue';
  import MADBFooter from './icons/MADBFooter.vue';
  
  export default {
    name: 'AddPCComponent',
    components: {
        AddPCMainComponent,
        MADBHeader,
        MADBFooter,
    },
  }
  </script>