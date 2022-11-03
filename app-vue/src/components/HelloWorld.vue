<!-- HelloWordl.vue es un componente -->
<script setup>
defineProps({
  msg: {   /*este componente recibe el paramero msg, que renderizamos en la linea 12*/
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Pokedex / Combat de cartes
      
    </h3>
  </div>
</template>

<style scoped> /*estos estilos solo se aplican a los elementos del componente*/
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
