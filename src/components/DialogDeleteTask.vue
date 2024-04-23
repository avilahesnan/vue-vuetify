<template>
  <div class="text-center pa-4">
    <v-dialog
        v-model="taskStore.showDialogDeleteTask"
        min-width="400"
        max-width="600"
        persistent>

            <v-card
                prepend-icon="mdi mdi-delete"
                text="Are you sure you want to delete this task?"
                title="Delete Task?">
                    <template v-slot:actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="taskStore.toggleDelete()">No</v-btn>
                        <v-btn @click="taskStore.deleteTask()">Yes</v-btn>
                    </template>
            </v-card>
    </v-dialog>
  </div>
</template>

<script setup>

import { useTaskStore } from '@/stores/task'

const taskStore = useTaskStore()

</script>