<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal">
            <h3>Ny oppgave</h3>
            <input type="text">
            <button class="addButton" @click="closeModal">Legg til</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        closeModal(){
            this.$emit('close')
        }
    }
}
</script>

<style>
.modal{
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}

.backdrop{
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
}
</style>