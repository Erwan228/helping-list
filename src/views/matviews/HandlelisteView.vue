<template>
    <Modal v-if="showModal" @close="toggleShowModal"/>
    <h2>Handleliste</h2>
    <div v-if="tingÅHandle.length" class="shoppingList" >
        <div v-for="ting in tingÅHandle" class="ting">
            <label>{{ ting }}</label><input type="checkbox" />
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