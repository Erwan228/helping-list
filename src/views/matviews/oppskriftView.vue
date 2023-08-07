<template>
<div v-if="oppskrift" class="oppskrift">
    <h2>{{ oppskrift.rett }}</h2>
    <p>{{ oppskrift.beskrivelse }}</p>
    <h3>Ingredienser</h3>
    <div v-for="ingrediens in oppskrift.ingredienser">
    <li>{{ ingrediens }}</li>
    </div>
</div>
<div v-else>
    <p>Loading...</p>
</div>
<button @click="this.showLol = true">Legg til i handleliste</button>
<p v-if="showLol">Lol</p>
</template>

<script>
export default {
    data(){
        return{
            showLol: false,
            oppskrift: null,
            id: this.$route.params.id
        }
    },
    mounted(){
        fetch('http://localhost:3000/oppskrifter/' + this.id)
        .then(res => res.json())
        .then(data => this.oppskrift = data)
        .catch(err => console.log(err.message))
    }
}
</script>