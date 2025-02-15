<script setup>
import { ref } from "vue";
import PokemonSearch from "./components/PokemonSearch.vue";
import PokemonList from "./components/PokemonList.vue";
import { fetchPromise } from './utils';

const pokemons = ref([]);
const filteredPokemons = ref([]);

async function getPokemon() {
  const response = await fetchPromise(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898"
  );
  if (response?.results) {
    pokemons.value = response.results;
    filteredPokemons.value = pokemons.value;
  }
}
getPokemon();

function handleSearch(query) {
  filteredPokemons.value = pokemons.value.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(query)
  );
}

    </script>

<template>
    <div class="container">
      <div class="header">
        <h2>Pokemon API</h2>
      </div>
      <PokemonSearch @search="handleSearch" />
      <PokemonList :filteredPokemons="filteredPokemons" />
    </div>
  </template>

<style>
.container {
  max-width: 1200px;
  margin-inline: auto;
  text-align: center;
}

.header {
  font-size: 25px;
}

.header h2 {
  font-weight: 400;
}
</style>