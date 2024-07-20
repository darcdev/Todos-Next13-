import { newTodo } from '@/utils/actions'

const NewTodoForm = () => {
  return (
    <div>
      <form action={newTodo}>
        <input name="content" className="border border-black-2/5" />
        <button type="submit">New Todo</button>
      </form>
    </div>
  )
}
export default NewTodoForm
