import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
    console.log(window.AP)
    // AP.getContext((contextData) => {
    //   console.log("Object: context", contextData);
    // });
  }

  return { count, doubleCount, increment }
})
