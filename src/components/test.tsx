import { defineComponent } from "vue";
import testStyle from 'styles/test.module.scss'
import useCount from 'hooks/useCount'
export default defineComponent({
  name: 'aIndex',
  setup() {
    const { count, addCount } = useCount(1)
    return () =>
      <div>
        <div class={testStyle.test}>test aaaa</div>
        <button onClick={addCount}>click me{count.value}</button>
      </div>
}
})
