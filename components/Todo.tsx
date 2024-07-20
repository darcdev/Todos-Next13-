'use client'

import { useTransition } from 'react'
import { completeTodo } from '@/utils/actions'

export default function Todo({ todo }) {
  const [isPending, startTransition] = useTransition()

  return (
    <div
      className={`border border-black/20 ${todo.completed ? 'line-through text-gray-900 cursor-pointer' : ''}`}
      onClick={() => startTransition(() => completeTodo(todo.id))}
    >
      {todo.content}
    </div>
  )
}
