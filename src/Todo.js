import React, { useState } from 'react'
import { ListItem } from './ListItem';
import './Todo.css'

export const Todo = () => {
    const [todoList,setTodoList] = useState([]);
    const [value,setValue] = useState('');

    const onAdd = () => {
        if(value !== '') {
        setTodoList([...todoList, {id:Math.random() , value: value} ]);
        setValue('');
        }
    }

    const onDeleteItem = (item) => {
        const modifiedTodo = todoList.filter((todo) => { return todo.id !== item.id});
        setTodoList(modifiedTodo);
    }

  return (
    <div>
    <div className='input'>
    <input type='text' onKeyDown={ e=> {if(e.key === 'Enter') onAdd()}}onChange={e=> setValue(e.target.value)} value={value} placeholder='add item...'></input>
    <button type="button" onClick={onAdd}>Add</button>
    </div>
    <div className="itemBox">{
    todoList.map((todo) => {return <ListItem  deleteItem={onDeleteItem} item={todo}></ListItem>})
    }</div>
    </div>
  )
}
