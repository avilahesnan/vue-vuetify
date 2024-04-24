<template>
    <Alert
        v-if="alertStore.showAlert" />
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer">
            <v-img
                src="https://images.pexels.com/photos/705425/pexels-photo-705425.jpeg"
                gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.5)"
                height="80"
                cover
                padding="pt-2">
                    <v-list>
                        <a href="https://github.com/avilahesnan" target="_blank">
                            <v-list-item
                                prepend-avatar="../../public/photo-anime.jpeg"
                                subtitle="Developer"
                                title="Hesnan Ávila">
                            </v-list-item>
                        </a>
                    </v-list>
            </v-img>

            <v-divider></v-divider>

            <v-list
                :lines="false"
                density="compact"
                nav>
                    <router-link
                        v-for="(item, i) in items"
                        :key="i"
                        :to="item.to">
                            <v-list-item
                                :value="item"
                                color="primary">
                                <template v-slot:prepend>
                                    <v-icon :icon="item.icon"></v-icon>
                                </template>
                                <v-list-item-title :textContent="item.text"></v-list-item-title>
                            </v-list-item>
                    </router-link>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
            color="teal-darken-4"
            image="https://images.pexels.com/photos/705425/pexels-photo-705425.jpeg"
            density="prominent">
                <template v-slot:image>
                    <v-img
                        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.5)"
                        cover>
                    </v-img>
                </template>
                <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

                <v-app-bar-title>To Do List</v-app-bar-title>
        </v-app-bar>

        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script setup>

import { ref } from 'vue'

import Alert from '@/components/shared/Alert.vue'
import { useAlertStore } from '@/stores/alert'

const alertStore = useAlertStore()
const drawer = ref(null)
const items = [
    { text: 'Home', icon: 'mdi-home', to: '/' },
    { text: 'About', icon: 'mdi-information', to: '/about' }
]

</script>

<style scoped>

a {
    text-decoration: none;
    color: #ffffff;
}
  
</style>