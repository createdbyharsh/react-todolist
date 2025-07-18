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
        {items.map((x)=>{
          return <li>{x}</li>
        })}
      </ul>
    </div>
  </div>
  )
}

export default App;
