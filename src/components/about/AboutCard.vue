<template>
    <v-card class="mx-auto" width="250">
        <v-img
            :src="props.image"
            height="200px"
            cover>
        </v-img>
        <v-card-title>{{ props.title }}</v-card-title>
        <v-card-text>{{ props.subtitle }}</v-card-text>
    </v-card>
</template>
  
<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
    image: String,
    title: String,
    subtitle: String,
})
const show = ref(false)

</script>