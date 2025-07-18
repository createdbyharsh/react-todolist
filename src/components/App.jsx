import React, { useState } from "react";

function App(){
  const [input, setInput]= useState("")
  const [items ,setItems] = useState([])

function handleChange(e){
  setInput(e.target.value)
}

function handleClick(){
  setItems((previousItems) => { 
    return [...previousItems, input]
    
   })
   setInput("");
}

function deleteItem(id){
  setItems((previousItems)=>{
    return previousItems.filter((x, index)=>{
      return index !== id;
    })
  })
  console.log("delete running")
}
  return (
  <div className="container">
    <div className="heading">
      <h1>To-Do list</h1>
    </div>
    <div className="form">
      <input type="text" onChange = {handleChange} value = {input}/>
      <button onClick = {handleClick}>
        <span>
          Add
        </span>
      </button>
    </div>
    <div className="listArea">
      <ul>
        {items.map((x, index)=>{
          return <li onClick = {()=>{
            deleteItem(index)
          }}key = {index}> {x} </li>
        })}
      </ul>
    </div>
  </div>
  )
}

export default App;
