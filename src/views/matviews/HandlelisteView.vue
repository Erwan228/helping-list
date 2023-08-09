<template>
    <h2>Handleliste</h2>
    <div v-if="tingÅHandle.length" class="shoppingList">
        <div v-for="ting in tingÅHandle" class="ting">
            <label>{{ ting }}</label><input type="checkbox" />
        </div>
        <button class="addButton" type="button">Legg til ting</button>
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</template>

<script>
export default{
    name: 'HandlelisteView',
    data(){
        return{
            tingÅHandle: [
                'Frukt',
                'Frisk koriander',
                'Boller',
                'Pizza',
                'Pølser',
                'Lakrisrot',
            ]
        }
    }
}
</script>