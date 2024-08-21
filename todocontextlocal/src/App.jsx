/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { TodoProvider } from './contexts'
import { TodoForm, TodoItem } from './components'


function App() {
  const [todos, setTodos] = useState([])

  // Add a Todo
  const addTodo = (todo) => {
    setTodos((prev) =>
      [{ id: Date.now(), ...todo }, ...prev])
  }

  // Update a Todo
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? todo : prevTodo))
  }

  // Delete a Todo
  const deleteTodo = (id) => {
    setTodos((prev) =>
      prev.filter((todo) =>
        todo.id !== id))
  }

  // Toggle the complete status of a Todo
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }


  // Query the local storage for any todos on page rendering
  useEffect(() => {
    const localTodos = localStorage.getItem('todos')

    if (localTodos && localTodos.length > 0) {
      setTodos(JSON.parse(localTodos))
    }
  }, [])

  // Save the todos to local storage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  // Render the App
  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">

        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage your Todos</h1>
          <div className='mb-4'>
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* Loop and add todo item here */}
            {
              todos.map((todo) => (
                <div className='w-full' key={todo.id}>
                  <TodoItem todo={todo} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App