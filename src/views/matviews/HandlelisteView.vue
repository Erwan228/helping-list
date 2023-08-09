<template>
    <Modal v-if="showModal" @close="toggleShowModal"/>
    <h2>Handleliste</h2>
    <div v-if="tingÅHandle.length" class="shoppingList">
        <button>Tøm liste</button>
        <div v-for="ting in tingÅHandle" class="ting">
            <label>{{ ting }}</label><input type="checkbox" /><button>slett</button>
        </div>
        <button class="addButton" type="button" @click="toggleShowModal">Legg til ting</button>
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</template>

<script>
import Modal from '@/components/ModalManualShopAdd.vue'

export default{
    name: 'HandlelisteView',
    components: { Modal },
    data(){
        return{
            tingÅHandle: [
                'Frukt',
                'Frisk koriander',
                'Boller',
                'Pizza',
                'Pølser',
                'Lakrisrot',
            ],
            showModal: false,
        }
    },
    methods: {
        toggleShowModal(){
            this.showModal = !this.showModal
        }
    },
}
</script>

<style scoped>
.shoppingList{
    border: solid blue 10px;
    margin-left: 30%;
    margin-right: 30%;
    padding-left: 2%;
    padding-right: 2%;
    padding-bottom: 2%;
}

.ting{
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    font-size: larger;
    border-bottom: solid 1px black;
}
</style>