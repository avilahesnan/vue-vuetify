<template>
    <v-text-field
        clearable label="Add Task"
        v-model="taskStore.titleTaskCreating"
        @keyup.enter="taskStore.addTask">
    </v-text-field>

    <ListTasks />
</template>

<script setup>

import { useTaskStore } from '@/stores/task'
import ListTasks from './ListTasks.vue'

const taskStore = useTaskStore()

</script>