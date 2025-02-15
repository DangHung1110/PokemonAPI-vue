<template>
    <div class="poke-item">
      <div class="item__id">#{{ id }}</div>
      <img class="item__image" :src="imageUrl" :alt="name" />
      <h3 class="item__name">{{ name }}</h3>
    </div>
  </template>
  
  <script setup>
  import { computed } from "vue";
  
  const props = defineProps({
    id: Number,
    name: String,
    url: String,
  });
  
  const imageUrl = computed(
    () => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`
  );
  </script>
  
  <style scoped>
  .poke-item {
    width: 200px;
    height: auto;
    border-radius: 15px;
    box-shadow: #0000001a 0 4px 12px;
    padding: 20px 0;
    margin: 10px 5px;
    text-transform: capitalize;
    text-align: center;
  }
  </style>
  