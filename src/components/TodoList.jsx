import React from 'react'
import { useState } from 'react'

function TodoList() {
    const[item,setItem]=useState("")
    const[todos,setTodos]=useState([]);
    const idhandel = ()=> {
      return  Math.floor(Math.random()*10)
    }
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
       setItem("")
    }
    const remove = (id)=> {
         setTodos(todos.filter((item)=> item.id !==id ))
    }
    const clearAll = ()=> {
         setTodos([])
    }
  return (
    <div className='todo-container'>
        <input type="text" value={item} onChange={(e)=> setItem(e.target.value)}/>
        <button onClick={()=>handeltodos(item)}>Add item</button>

        <ul>
        {todos.length>0 && todos.map(({text,id})=>
        <><li key={id}>{text}
         <button onClick={()=> remove(id)}>x</button>
        </li>
        </>
        )}
       {todos.length>0 &&<button className='clearAll' onClick={()=> clearAll()}><i className='bi bi-trash3-fill'></i></button>} 
        </ul>
         
    </div>
  )
}

export default TodoList