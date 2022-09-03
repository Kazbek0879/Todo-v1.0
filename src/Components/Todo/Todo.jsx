import React from 'react'
import {AiFillDelete} from 'react-icons/ai'

function Todo({todo,toggleTask,removeTask}) {
  return (
    <div key={todo.id}    
     className= 'item-todo ml-[30%] w-[50%] bg-stone-400 pl-5 pt-3 pb-3 flex item-center  justify-between pr-2 text-2xl rounded-xl mb-9'>
      <div className={todo.complete ? 'item-text-strike' : 'item-text' }
        onClick={()=>toggleTask(todo.id)}>
        {todo.task}
      </div>
        <div className='item-delete' onClick={()=>removeTask(todo.id)}>
          <AiFillDelete size={25} className='hover:text-red-700 delay-100'/>
        </div>
    </div>
  )
}

export default Todo
 