<template>
    <div class="contador">
        {{ $store.state.contador}}
    </div>
</template>

<script>
    export default{
        name:'Contador',
    }
</script>

<style scoped>
    .contador{
        font-size: 8rem;
    }
</style>