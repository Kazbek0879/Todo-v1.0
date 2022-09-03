import React from 'react'
import { useState } from 'react'

function TodoForm({addTask}) {
    const  [userInput,setUserInput]=useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }
    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            handleSubmit(e)
        }
    }
    const addClick =(e)=>{
        handleSubmit(e)
    }
  return (
    <div className='flex justify-center mt-7  ml-[5%] text-white '>
    <forma onSubmit={handleSubmit} className=' flex justify-center bg-stone-500 rounded-lg mb-6 border-2 border-slate-200' >
        <input 
        value={userInput}
        type='text'
        onChange={handleChange}
        onKeyDown={handleKeyPress  }
        placeholder='Введите значение...'
        className=' pt-2 pb-3 pl-4  rounded-xl border-none w-[220px]  outline-none bg-transparent text-xl  text-slate-200  '
        maxLength={35}
        />
        
    </forma>
    <button onClick={addClick}
     className=' pt-1 pb-1  ml-1  bg-stone-500 mb-6 rounded-xl w-[80px] active:bg-stone-500
      border-2 border-slate-200 pl-2 pr-2
      
      '>
     Add</button>
    </div>
  )
}

export default TodoForm