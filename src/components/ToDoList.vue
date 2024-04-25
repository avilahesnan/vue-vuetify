<template>
    <v-text-field
        clearable label="Add Task"
        :rules="rules"
        v-model="taskStore.titleTaskCreating"
        @keyup.enter="taskStore.addTask">
    </v-text-field>
    <ListTasks />
</template>

<script setup>

import { onMounted } from 'vue'

import { useTaskStore } from '@/stores/task'
import ListTasks from './ListTasks.vue'

const taskStore = useTaskStore()
const rules = [
    value => {
        if (!value ||  value.length > 5) { 
            return true
        }
        return 'You must enter Task title with more then 5 character.'
    }
]
onMounted(() => taskStore.getTasks())

</script>