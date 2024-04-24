<template>
    <div class="ma-4 text-center">
        <h1 class="ma-4">Technologies that were used in this project.</h1>
        <v-divider></v-divider>
    </div>
    <div></div>
    <div class="ma-4 d-flex">
        <AboutCard
            v-for="(item, index) in items"
            :key="index"
            :image="item.image"
            :title="item.title"
            :subtitle="item.subtitle"
            :text="item.text" />
    </div>
</template>

<script setup>

import AboutCard from "@/components/about/AboutCard.vue";

const items = [
    {
        image:
            "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*OrjCKmou1jT4It5so5gvOA.jpeg",
        title: "Vue.js",
        subtitle: "The Progressive JavaScript Framework"
    },
    {
        image:
            "https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-dark-atom.svg",
        title: "Vuetify 3",
        subtitle: "Incredible front-end Library"
    },
    {
        image:
            "https://fineproxy.org/wp-content/uploads/2023/07/netlify.app_logo.png",
        title: "Netlify",
        subtitle: "Netlify Embeds Serverless Functionality into Its Web"
    },
    {
        image:
            "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*UWpmhI3AEdFY7gjHIZH-2w.png",
        title: "PWA",
        subtitle: "Progressive Web App"
    }
]

</script>