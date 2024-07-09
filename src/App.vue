<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
</script>

<template>
  <div id="app">
    <main>
    <header>
      <HeaderComponent />
    </header>
        <router-view></router-view>
    <footer>
      <FooterComponent />
    </footer>
  </main>
  </div>
</template>
