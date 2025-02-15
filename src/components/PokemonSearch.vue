<template>
    <input
      type="text"
      placeholder="Search some Pokemon"
      class="poke-search"
      v-model="searchQuery"
      @input="emitSearch"
    />
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const searchQuery = ref("");
  
  const emit = defineEmits(["search"]);
  
  function emitSearch() {
    emit("search", searchQuery.value.toLowerCase());
  }
  </script>
  
  <style scoped>
  .poke-search {
    max-width: 500px;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 20px;
    border-radius: 30px;
    font-size: 16px;
    padding: 20px;
    border: none;
    outline: 1px solid #00000036;
  }
  
  .poke-search:focus {
    outline: 1px solid #000000;
  }
  </style>
  