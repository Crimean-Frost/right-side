import {defineStore} from "pinia";

export const useMyStore = defineStore('useMyStore', {
    state: () => ({
        isModalApplicationOpen: false,
        isModalStatusOpen: false,
        isModalSectorOpen: false,
    }),
    actions: {
        toggleIsModalApplicationOpen() {
            this.isModalApplicationOpen = !this.isModalApplicationOpen;
        },
        toggleIsModalStatusOpen() {
            this.isModalStatusOpen = !this.isModalStatusOpen;
        },
        toggleIsModalSectorOpen() {
            this.isModalSectorOpen = !this.isModalSectorOpen;
        },
    }
})