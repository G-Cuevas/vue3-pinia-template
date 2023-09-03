import { defineStore } from "pinia";

interface CounterOptionsState {
    count: number;
    updatedAt?: Date;
}

export const useCounterOptionsStore = defineStore('counterOptions', {
    state: () => ({
        count: 0,
        updatedAt: undefined,
    } as CounterOptionsState),

    actions: {
        incrementBy( value: number ) {
            this.count += value
            this.updatedAt = new Date()
        },
        increment() {
            this.incrementBy(1)
        },
        reset() {
            this.count = 0
            this.updatedAt = new Date()
        },
    },

    getters: {
        counter(): number {
            return this.count;
        },
        squared(): number {
            return this.count * this.count;
        }
    },
});