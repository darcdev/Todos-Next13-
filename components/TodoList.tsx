import Todo from '@/components/Todo'

const TodoList = ({ todos }: { todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  )
}

export default TodoList
