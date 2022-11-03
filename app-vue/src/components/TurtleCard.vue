// // recibimos una array con todas las props que necesitamos('info')  
<!-- /*ESTE ARCHIVO ES EL COMPONENE*/ -->

<script setup>
//console.log("dentro")
const props = defineProps(['info']);
//console.log(props.info)
// const img=props.info.sprites.front_default;
// console.log(img)
const imatge = props.info.url;
const identificador = imatge.substr(-2, 1);
const nombre = props.info.name;
</script>

<template>
  <div>
    <article class="card">
      <h2>{{ identificador }}</h2>
      <h2>{{ props.info.name }}</h2>
      <h2>{{ props.info.url }}</h2>
      <img src="${img}">
      <button @click="$router.push({ name: 'single', params: { tortugaid:identificador},})">Ver mas</button>
    </article>
  </div>
</template>

<style scoped>
/* con style scoped la siguiente class card afectará SOLO a este componente */
.card {
  display: flex;
  flex-direction: column;
  border-radius: 6px solid grey;
  overflow: hidden;
  box-shadow: 0 0 1px 1px green;
  width: fit-content;
  /*ancho en funcion del texto*/
  min-width: 200px;
  margin: 10px;
}

.card button {
  margin-top: auto;
}
</style>