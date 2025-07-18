import React, { useState } from "react";

function ToDoListItems(props) {
  return (
    <li
      onClick={() => {
        props.onTapping(props.id);
      }}
    >
      {props.text}
    </li>
  );
}

export default ToDoListItems;
