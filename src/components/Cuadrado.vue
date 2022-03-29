<template>
    <div class="cuadrado">
        {{ $store.state.contador}} <sup>2</sup> = {{ $store.getters.cuadrado}}
    </div>
</template>

<script>

export default {
   name:'Cuadrado',
}
</script>

<style scoped>
    .cuadrado{
      font-size: 2rem;
      margin: 1rem;
    }
</style>
