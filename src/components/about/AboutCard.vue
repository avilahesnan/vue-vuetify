<template>
    <v-card
        class="mx-auto"
        :href="props.url"
        target="_blank">
            <v-img
                class="image"
                :src="props.image"
                cover>
            </v-img>
            <v-card-title class="title">{{ props.title }}</v-card-title>
            <v-card-text class="subtitle">{{ props.subtitle }}</v-card-text>
    </v-card>
</template>
  
<script setup>

import { ref, defineProps } from 'vue';

const props = defineProps({
    image: String,
    title: String,
    subtitle: String,
    url: String
})
const show = ref(false)

</script>

<style scoped>

.mx-auto {
    max-width: 280px;
    width: 100%;
}
.image {
    height: 200px;
}
@media screen and (max-width: 1024px) {
    .mx-auto {
        max-width: 180px;
        border-radius: 10%;
    }
    .image {
        height: 150px;
    }
    .subtitle {
        display: none;
    }
}
@media screen and (max-width: 768px) {
    .mx-auto {
        max-width: 150px;
        border-radius: 50%;
    }
    .title {
        display: none;
    }
}

</style>