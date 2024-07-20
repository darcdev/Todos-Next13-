'use server'

import db from './db'
import { revalidatePath } from 'next/cache'

export const completeTodo = async (id: string) => {
  const todo = await db.todo.findUnique({ where: { id } })
  await db.todo.update({
    where: {
      id,
    },
    data: {
      completed: !todo.completed,
    },
  })
  revalidatePath('/todos')
}

export const newTodo = async (formData) => {
  const todo = await db.todo.create({
    data: {
      content: formData.get('content'),
    },
  })
  revalidatePath('/todos')
}
