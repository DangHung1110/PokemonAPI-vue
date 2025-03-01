<script setup>
import { ref, onMounted } from 'vue';
import { getIDPokemon } from '@/utils/getID';
import { useRouter } from 'vue-router';
const router = useRouter();
const props = defineProps(['pokemon']);
defineEmits(['select-pokemon']);

function selectedpokemon ()
{
    sessionStorage.setItem("selectedpokemon", JSON.stringify(props.pokemon));
    router.push('/' + props.pokemon.name);
}

const Loading = ref(true);

onMounted(function() {
    setTimeout(function() {
        Loading.value = false;
    },300);
});

</script>
<template>
        <div class="poke-item" @click="selectedpokemon">
            <template v-if="!Loading">
                <div class="item__id">#{{ getIDPokemon(props.pokemon.url) }}</div>
                <img class="item__image" :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getIDPokemon(props.pokemon.url)}.png`">
                <h3 class="item__name">{{ props.pokemon.name }}</h3>
                <div class="flex-types">
                    <div class="type-item" v-for="item in props.pokemon.types" :key="item" :class="item">
                        {{ item }}  
                    </div>
                </div>
            </template>
             <div  v-if="Loading" class="pokemonloading">
                <img src="../assets/pokeloading.jpg" alt="pokemonloading">
             </div>
        </div>
</template>   
<style>
a {
    text-decoration: none;
    color: black;
}

img {
    width: 150px;
    height: 160px;
}
</style>