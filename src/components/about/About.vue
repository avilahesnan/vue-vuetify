<template>
    <div class="ma-4 text-center">
        <h1 class="ma-4 title">Technologies that were used in this project.</h1>
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
            :text="item.text"
            :url="item.url" />
    </div>
</template>

<script setup>

import AboutCard from "@/components/about/AboutCard.vue";

const items = [
    {
        image:
            "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*OrjCKmou1jT4It5so5gvOA.jpeg",
        title: "Vue.js",
        subtitle: "The Progressive JavaScript Framework",
        url: "https://vuejs.org/"
    },
    {
        image:
            "https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-dark-atom.svg",
        title: "Vuetify 3",
        subtitle: "Incredible front-end Library",
        url: "https://vuetifyjs.com/en/"
    },
    {
        image:
            "https://fineproxy.org/wp-content/uploads/2023/07/netlify.app_logo.png",
        title: "Netlify",
        subtitle: "Netlify Embeds Serverless Functionality into Its Web",
        url: "https://app.netlify.com/"
    },
    {
        image:
            "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*UWpmhI3AEdFY7gjHIZH-2w.png",
        title: "PWA",
        subtitle: "Progressive Web App",
        url: "https://vite-pwa-org.netlify.app/"
    }
]

</script>

<style scoped>

@media screen and (max-width: 768px) {
    .d-flex {
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .title {
        font-size: 16px;
    }
}

</style>