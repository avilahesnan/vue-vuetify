<template>
    <div class="alert-notification">
        <v-alert
            class="animate__animated animate__fadeInUp"
            closable
            :color="alertStore.color"
            :icon="alertStore.icon"
            :text="alertStore.text">
        </v-alert>
    </div>
</template>


<script setup>

import 'animate.css'

import { useAlertStore } from '@/stores/alert'

const alertStore = useAlertStore()

</script>

<style scoped>

.alert-notification {
    position: fixed;
    z-index: 1;
    bottom: 50px;
    width: 100%;
    padding: 0 35%;
}

</style>