<!-- views son las vistas (las páginas) 
esta es la vista del about-->
<script setup>
// importa un componente y renderiza dentro del template este componente
import HelloWorld from '../components/HelloWorld.vue'
</script>

<template>
  <div class="new">
    <h1>This is an about page</h1>
    <h2>Això es un subtitol</h2>
    <HelloWorld msg="You did it!!!!" />
  </div>

  
</template>

<style>
.new{
  display:grid;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
