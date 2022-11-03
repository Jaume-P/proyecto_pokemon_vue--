<script setup>
const empleados=[
    {id:1, nombre:"pepe",apellidos:"carlos"},
    {id:2, nombre:"maria",apellidos:"garcia"},
    {id:3, nombre:"lola",apellidos:"gimenez"}

]
</script>


<template>
    <div class="new">
     <h1>V-for exemple</h1>
     <ul>
         <li v-for="emp in empleados" :key="emp.id"
         @click="$router.push({name:'single',params:{empid:emp.id}})">
             {{emp.id}} : {{emp.nombre}}
         </li>
     </ul>
    </div>
 </template>
 
 <style>
 .new{
     display:grid;
     }
 li{
     cursor:pointer;
 }
 
 li:hover{
     color:green;
 
 }
 </style>