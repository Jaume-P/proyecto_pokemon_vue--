<script setup>
// si queremos pasar propiedades(p.ej: id) de la API a esta página visualViewport
const props=defineProps(['tortugaid'])

console.log(props)
</script>


<template>
    <div class="new">
     <h1>Pokemon amb id: {{props.tortugaid}}</h1> 
        
     
    
    </div>
 </template>
 
 <style>
 .new{
     display:grid;
     }
 
 </style>
