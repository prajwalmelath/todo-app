import React from "react";
import './ListItem.css'

export const ListItem = ({ item, deleteItem }) => {
  return (

<div className='listItem'>
    <div>
    <input type="checkbox"></input>
    <b className="itemText">{item.value}</b>
    </div>
    <button onClick={() => deleteItem(item)}>delete</button>
    </div>
  );
};
