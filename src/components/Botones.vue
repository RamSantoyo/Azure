<template>
    <div class="buttons">
        <button @click="$store.dispatch('bajarContador')">-</button>
        <button @click="$store.dispatch('subirContador')">+</button>
  </div>
</template>

<style scoped>
    .buttons button{
    padding: 1rem;
    background-color: black;
    border: none;
    color: white;
    font-size: 2rem;
    margin-left: .5rem;
    width: 4rem;
  }

    .buttons button:hover{
      cursor:pointer;
    } 
</style>

<script>

export default{
    name:'Botones',
}
</script>
