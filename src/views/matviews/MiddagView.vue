<template>
    <Modal v-if="showModal" @close="toggleShowModal"/>
    <div v-if="oppskrifter.length" class="list">
            <div v-for="oppskrift in oppskrifter" :key="oppskrift.id" class="oppskrift">
                <router-link :to="{ name: 'oppskriftView', params: {id: oppskrift.id} }">
                <p>{{ oppskrift.rett }}</p>
            </router-link>
            </div>
            <button class="addButton" @click="toggleShowModal">Legg til rett</button>
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    
</template>

<script>
import Modal from '@/components/ModalToAddMeal.vue'

export default {
    name: 'MiddagView',
    data(){
        return{
            oppskrifter: [],
            showModal: false,
        }
    },
    methods: {
        toggleShowModal(){
            this.showModal = !this.showModal
        }
    },
    components: { Modal },
    mounted(){
        fetch('http://localhost:3000/oppskrifter')
        .then(res => res.json())
        .then(data => this.oppskrifter = data)
        .catch(err => console.log(err.message))
    }
}
</script>

<style scoped>
.list {
  border: solid blue 10px;
  margin-left: 30%;
  margin-right: 30%;
  padding-left: 2%;
  padding-right: 2%;
  padding-bottom: 2%;
}
</style>