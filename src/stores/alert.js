import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
    state: () => ({
        showAlert: false,
        color: '',
        icon: '',
        text: ''
    }),
    actions: {
        notifyAlert() {
            this.showAlert = true
            setTimeout(() => {
                this.showAlert = false
            }, 3000)
        },
        notifyAlertCreated() {
            this.color = 'green-lighten-1'
            this.icon = '$success'
            this.text = 'Task created success!'
            this.notifyAlert()
        },
        notifyAlertUpdated() {
            this.color = 'blue-lighten-1'
            this.icon = '$info'
            this.text = 'Task updated!'
            this.notifyAlert()
        },
        notifyAlertDeleted() {
            this.color = 'red-lighten-1'
            this.icon = '$warning'
            this.text = 'Task deleted!'
            this.notifyAlert()
        }
    }
})