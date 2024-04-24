import { ref } from 'vue'
import { defineStore } from 'pinia'

import { useAlertStore } from './alert'

const alertStore = useAlertStore()

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [],
    titleTaskCreating: '',
    indexTaskSelected: ref(0),
    showDialogTaskFields: ref(false),
    showDialogDeleteTask: ref(false)
  }),
  actions: {
    addTask() {
        if(this.titleTaskCreating.length <= 5) {
            return
        }
        this.tasks.push({
                title: this.titleTaskCreating,
                done: false
            })
        this.titleTaskCreating = ''
        this.saveLocalData()
        alertStore.notifyAlertCreated()
    },
    updateTask() {
        this.saveLocalData()
        this.toggleEdit()
        alertStore.notifyAlertUpdated()
    },
    deleteTask() {
        this.tasks.splice(this.indexTaskSelected, 1)
        this.toggleDelete()
        this.saveLocalData()
        alertStore.notifyAlertDeleted()
    },
    toggleEdit(index) {
        this.showDialogTaskFields = !this.showDialogTaskFields
        if(index != null) {
            this.indexTaskSelected = index
        }
    },
    toggleDelete(index) {
        this.showDialogDeleteTask = !this.showDialogDeleteTask
        if(index != null) {
            this.indexTaskSelected = index
        }
    },
    toggleDoneTask(index) {
        this.tasks[index].done = !this.tasks[index].done
        this.saveLocalData()
    },
    saveLocalData() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    getTasks() {
        let items = localStorage.getItem('tasks')
        if(items) {
            this.tasks = JSON.parse(items)
        }
    }
  }
})