<template>
    <div class="text-center pa-4">
        <v-dialog
            v-model="taskStore.showDialogTaskFields"
            min-width="400"
            max-width="600"
            persistent>
                <v-card
                    prepend-icon="mdi mdi-calendar-edit"
                    title="Edit Task">
                        <v-card-text>
                            <v-text-field
                                v-model="props.task.title"
                                clearable label="Title">
                            </v-text-field>
                            <v-text-field
                                v-model="props.task.description"
                                clearable label="Description">
                            </v-text-field>
                        </v-card-text>
                        <template v-slot:actions>
                            <v-spacer></v-spacer>
                            <v-btn @click="taskStore.toggleEdit()">Ok</v-btn>
                        </template>
                </v-card>
        </v-dialog>
    </div>
</template>

<script setup>

import { defineProps } from 'vue'

import { useTaskStore } from '@/stores/task'

const taskStore = useTaskStore()

const props = defineProps({
    task: Object
})

</script>