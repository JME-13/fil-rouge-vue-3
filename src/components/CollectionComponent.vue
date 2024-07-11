<template>
  <main>
    <MADBHeader />
      <CollectionMainComponent />
    <MADBFooter />
  </main>
</template>

<script>
import CollectionMainComponent from './icons/CollectionMain.vue';
import MADBHeader from './icons/MADBHeader.vue';
import MADBFooter from './icons/MADBFooter.vue';

export default {
  name: 'CollectionComponent',
  components: {
    CollectionMainComponent,
    MADBHeader,
    MADBFooter,
  },
}
</script>