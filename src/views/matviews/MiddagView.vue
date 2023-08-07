<template>
    <div class="oppskriftsListe">
        <div v-if="oppskrifter.length">
            <div v-for="oppskirft in oppskrifter">
                <p>{{ oppskirft.rett }}</p>
            </div>
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    </div>
    
</template>

<script>

export default {
    name: 'MiddagView',
    data(){
        return{
            oppskrifter: []
        }
    },
    mounted(){
        fetch('http://localhost:3000/oppskrifter')
        .then(res => res.json())
        .then(data => this.oppskrifter = data)
        .catch(err => console.log(err.message))
    }
}
</script>

<style scoped>

</style>