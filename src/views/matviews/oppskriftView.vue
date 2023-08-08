<template>
    <modal v-if="showModal1" @close="toggleShowModal1">
        <template>
            <p>LOL wouldn't that be nice if it worked</p>
            <p>Come back later</p>
        </template>
    </modal>
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
<button @click="toggleShowModal1">Legg til i handleliste</button>
</template>

<script>
import Modal from '@/components/Modal.vue';

export default {
    components: { Modal },
    data(){
        return{
            oppskrift: null,
            id: this.$route.params.id,
            showModal1: false,
        }
    },
    methods: {
        toggleShowModal1(){
            this.showModal1 = !this.showModal1
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