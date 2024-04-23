<template>
    <v-text-field
        clearable label="Add Task"
        v-model="task.title"
        @keyup.enter="addTask">
    </v-text-field>

    <ListTasks :tasks="tasks"/>
</template>

<script setup>

import { ref } from 'vue'

import ListTasks from './ListTasks.vue'

const tasks = ref([
    {
        title: 'Estudar Vue',
        description: 'Estudar Vue com Vuetify...'
    }
])

const task = ref({
    title: '',
    description: ''
})

const addTask = () => {
    tasks.value.push({
        title: task.value.title,
        description: task.value.description
    })
    task.value = {
        title: '',
        description: ''
    }
}

</script>
