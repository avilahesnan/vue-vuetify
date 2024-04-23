import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [
        {
            title: 'Estudar Vue',
            description: 'Estudar Vue com Vuetify...'
        }
    ],
    titleTaskCreating: '',
    indexTaskSelected: ref(0),
    showDialogTaskFields: ref(false),
    showDialogDeleteTask: ref(false)
  }),
  actions: {
    addTask() {
       this.tasks.push({
            title: this.titleTaskCreating
        })
       this.titleTaskCreating = ''
       this.saveLocalData()
    },
    deleteTask() {
        this.tasks.splice(this.indexTaskSelected, 1)
        this.toggleDelete()
        this.saveLocalData()
    },
    toggleEdit(index) {
        this.showDialogTaskFields = !this.showDialogTaskFields
        if(index != null) {
            this.indexTaskSelected = index
        }
        this.saveLocalData()
    },
    toggleDelete(index) {
        this.showDialogDeleteTask = !this.showDialogDeleteTask
        if(index != null) {
            this.indexTaskSelected = index
        }
    },
    saveLocalData() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
  }
})
