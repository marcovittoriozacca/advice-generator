<script>
import { store } from '@/store';

export default {
    name: 'AdviceBox',
    data() {
        return {
            store,
            
        }
    },
    methods: {
        handleClick(){
            this.$emit('advice'),
            store.isDisabled = true
            const disabled = setInterval(() => {
                clearInterval(disabled)
                store.isDisabled = false
            }, 2000);
        }
    },
}
</script>


<template>

    <div class="container">
        <div class="rounded-3 text-white d-flex flex-column align-items-center advice-box position-relative px-4 py-5">

            <p class="fw-bold">ADVICE #{{ store.adviceID }}</p>

            <blockquote class="text-center">
                <q>
                    {{ store.advice }}
                </q>
            </blockquote>

            <figure class="m-0 py-3">
                <img src="../assets/images/pattern-divider-mobile.svg" alt="divider" class="d-md-none">
                <img src="../assets/images/pattern-divider-desktop.svg" alt="divider" class="d-none d-md-block">
            </figure>
            <button :disabled="store.isDisabled" class="dice p-3 border border-0  rounded-circle d-inline-block m-0 position-absolute" @click="handleClick">
                <img src="../assets/images/icon-dice.svg" alt="dice">
            </button>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../assets/sass/partials/variables' as *;
    .advice-box{
        max-width: 516px;
        background-color: $dark-grayish-blue;
        margin: 0 auto;
        p{
            color: $neon-green;
            font-size: .7rem;
            letter-spacing: 6px;
        }
        blockquote{
            q{
                font-size: 1.8rem;
                font-weight: 600;
            }
        }

        .dice{
            background-color: $neon-green;
            bottom: -30px;
            cursor: pointer;
            transition: .2s box-shadow linear;
            &:hover{
                box-shadow: 0 0 15px 3px $neon-green;
            }
            
        }
    }

</style>