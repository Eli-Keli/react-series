/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {useTodo} from '../contexts'

function TodoForm() {
    const [todo, setTodo] = useState("")

    const {addTodo} = useTodo()

    // Handle form submission
    const add = (e) => {
        e.preventDefault()
        if (!todo) return
        // Add the new todo to the todos list
        addTodo({todo, completed: false})
        setTodo("")
    }

  return (
    <form onSubmit={add} className='flex'>
      <input
        type="text"
        className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new todo..."
      />
      <button type="submit" className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0'>Add Todo</button>
    </form>
  )
}

export default TodoForm