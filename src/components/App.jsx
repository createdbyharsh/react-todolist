import React, { useState } from "react";
import ToDoListItems from "./ToDoItem";
import InputPutField from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

  function handleClick(input) {
    setItems((previousItems) => {
      return [...previousItems, input];
    });
  }

  function deleteItem(id) {
    setItems((previousItems) => {
      return previousItems.filter((x, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>React To-do List</h1>
      </div>
      <InputPutField onAdding={handleClick} />
      <div className="listArea">
        <ul>
          {items.map((x, index) => (
            <ToDoListItems
              key={index}
              id={index}
              text={x}
              onTapping={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
