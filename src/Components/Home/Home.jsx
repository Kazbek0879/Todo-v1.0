import React from 'react'
import Todo from '../Todo/Todo'
import TodoForm from '../TodoForm/TodoForm'
import { useState } from 'react'

function Home() {
    const [todos,setTodos] = useState([])

    const  addTask = (userInput) =>{
        if(userInput){
          const newItem = {
            id:Math.random().toString(36).substr(2,9),
            task:userInput,
            complete:false
          }
          setTodos([...todos,newItem])
        }
    }

    const  removeTask = (id) =>{
        setTodos([...todos.filter((todo)=>todo.id !== id)])
    }

    const  handleToggle = (id) =>{
        setTodos([
            ...todos.map((todo)=>
            todo.id === id ? {...todo,complete: !todo.complete} : {...todo})
        ])
    }
  return (
    <div className=' text-white w-2/5 mx-auto py-3  text-xl bg-red-200  w-[100%] '>
    <h1 className=' font-bold text-xl text-center' >Todos: {todos.length }</h1>
      <TodoForm  addTask={addTask} />
    {todos.map((todo)=>{
      return(
        <Todo
          key={todo.id}
          todo={todo}
          toggleTask={handleToggle}
          removeTask={removeTask}
         />
    )
  })}
 
  </div>
   
  )
} 
export default Home