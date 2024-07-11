<template>
    <div class="AddPC">
      <AddPCComponent />
    </div>
  </template>
    
  <script>
  import AddPCComponent from '@/components/AddPCComponent.vue';
  
  export default {
    name: 'AddPC',
    components: {
        AddPCComponent,
    }
  }
  </script>