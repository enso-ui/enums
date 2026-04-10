import { defineStore } from 'pinia';
import initEnums from '../initEnums';

export const enums = defineStore('enums', {
    state: () => ({
        enums: {},
    }),

    actions: {
        set({ enums }, i18n) {
            this.enums = initEnums(enums, i18n);
        },
    },
});
