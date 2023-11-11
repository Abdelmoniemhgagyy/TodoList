import React from 'react'
import { createRef } from 'react';
import { useState,useEffect } from 'react'

function TodoList() {
    const[item,setItem]=useState("")
    const[todos,setTodos]=useState([]);
    
    const idhandel = ()=> {
      return  Math.floor(Math.random()*1000)
    }
    const input = createRef();
    useEffect(()=>{
      input.current.focus();
    },[])
    const handeltodos = ()=>{
        
        if(item !== ""){
            
            setTodos([...todos,{
                text:item.toUpperCase(),
                id:idhandel(),
               }])
        }
//        setTodos((todos)=>
//        todos.concat({
//         text:item,
//         id:idhandel(),
//        }) 
//    )
       setItem("");
       input.current.focus();

    }
    const remove = (id)=> {
         setTodos(todos.filter((item)=> item.id !==id ))
    }
    const clearAll = ()=> {
         setTodos([])
    }

  return (
    <div className='todo-container'>
        <input type="text" value={item} onChange={(e)=> setItem(e.target.value)} ref={input}/>
        <button onClick={()=>handeltodos(item)}>Add item</button>

        <ul>
        {todos.length>0 && todos.map((todo)=>
        <><li key={todo.id}>{todo.text}
         <button onClick={()=> remove(todo.id)}>x</button>
        
        </li>
        </>
        )}
       {todos.length>0 &&<button className='clearAll' ><i onClick={()=> clearAll()} className='bi bi-trash3-fill'></i></button>} 
        </ul>
         
    </div>
  )
}

export default TodoList