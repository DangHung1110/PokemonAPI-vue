<template>
    <div v-if="filteredPokemons.length > 0" class="poke-list">
      <PokemonItem
        v-for="pokemon in ListPokemons"
        :key="pokemon.url"
        :id="getPokemonID(pokemon.url)"
        :name="pokemon.name"
      />
    </div>
    <div v-else class="no-results">No Pokemon found.</div>
  
    <button
      v-show="filteredPokemons.length > offset + limit"
      class="load-page-btn"
      @click="handleLoadMore"
    >
      Load More
    </button>
</template>
  
  
<script setup>
  import { ref, computed } from "vue";
  import PokemonItem from "./PokemonItem.vue";
  
  const props = defineProps({
    filteredPokemons: Array,
  });
  
  const offset = ref(0);
  const limit = 36;
  
  const ListPokemons = computed(() => {
    return props.filteredPokemons.slice(offset, offset.value + limit);
  });
  
  function handleLoadMore() {
  offset.value += limit;

}
function getPokemonID(url) {
    const parts = url.split('/'); 
    return parseInt(parts[parts.length - 2], 10);
}

</script>
  
<style scoped>
.poke-list
{
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    margin-top: 50px;
}
  
  .load-page-btn {
    border-radius: 10px;
    padding: 20px 25px;
    cursor: pointer;
    font-size: 16px;
    color: #fff;
    background-color: #ff4d4f;
    border: none;
    margin-top: 20px;
    display: block;
    margin-inline: auto;
  }
</style>
  