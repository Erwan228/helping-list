<template>
    <modal v-if="showModal" @close="toggleShowModal">
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
<button @click="toggleShowModal">Legg til i handleliste</button>
</template>

<script>
import Modal from '@/components/ModaladdToShopList.vue';

export default {
    components: { Modal },
    data(){
        return{
            oppskrift: null,
            id: this.$route.params.id,
            showModal: false,
        }
    },
    methods: {
        toggleShowModal1(){
            this.showModal = !this.showModal
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