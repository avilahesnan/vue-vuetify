<template>
  <div class="text-center pa-4">
    <v-dialog
        v-model="taskStore.showDialogDeleteTask"
        min-width="400"
        max-width="600"
        persistent>

            <v-card
                prepend-icon="mdi mdi-delete"
                text="This action can't be reverted."
                title="Are you sure you want delete this task?">
                    <template v-slot:actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="red-lighten-1"
                          variant="elevated"
                          @click="taskStore.toggleDelete()">
                            No
                        </v-btn>
                        <v-btn
                          color="red-lighten-1"
                          variant="outlined"
                          @click="taskStore.deleteTask()">
                            Yes
                        </v-btn>
                    </template>
            </v-card>
    </v-dialog>
  </div>
</template>

<script setup>

import { useTaskStore } from '@/stores/task'

const taskStore = useTaskStore()

</script>