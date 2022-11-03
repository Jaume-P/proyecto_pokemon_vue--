<!-- /*ESTE ARCHIVO ES LA VISTA del componenete TurtleCardvue*/ -->

<script setup>
/*IMPORTAMOS EL COMPONENTE TurtleCard.vue*/
import { onMounted, ref } from "@vue/runtime-core";
import TurtleCard from "../components/TurtleCard.vue";

const tortugas = ref([]);
const tortuga = ref([]);


onMounted(() => {
    getAllData(10).then((info) => {
    console.log(info.results)
    tortugas.value = info.results;  
  })
})

async function getAllData(limit) {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

</script>

<template>
  <div class="new">
    <h1>Pokemons</h1>
    <section class="cards">

      
      <TurtleCard v-for="tortuga in tortugas" :key="tortuga.name" :info="tortuga" />

    </section>
  </div>
</template>
 
<style>
.new {
  display:grid;
  
}

li {
  cursor: pointer;
}

li:hover {
  color: green;
}

.cards {
  /* display: flex; */
  gap: 2rem;
  /*separacion entre elementos cuando tienen display flex o display grid*/
}
</style>