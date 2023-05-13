import { ref } from 'vue'

export default (initCount: number) => {
  const count = ref(initCount)
  const addCount = () => {
    count.value++
  }
  return {
    count,
    addCount
  }
}
