<script>
export default {
    name: 'ApiLoader',
}
</script>

<template>
    <span class="loader"></span>
</template>

<style lang="scss" scoped>
@use '../assets/sass/partials/variables' as *;
    
.loader {
    width: 60px;
    height: 60px;
    border: 5px solid $grayish-blue;
    border-bottom-color: $neon-green;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    } 

</style>