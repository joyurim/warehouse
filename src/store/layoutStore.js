import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layout', {
    state: () => ({
        isWebLayout: window.innerWidth >= 750,
    }),
    actions: {
        checkIfWeb() {
            this.isWebLayout = window.innerWidth >= 750;
            const appDiv = document.getElementById('app');
            if (this.isWebLayout) {
                appDiv.classList.add('webLayout');
            } else {
                appDiv.classList.remove('webLayout');
            }
        },
    },
});
