import React, { useState } from "react";

function InputPutField(props) {
  console.log(props);
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <div className="form">
      <input type="text" onChange={handleChange} value={input} />
      <button
        onClick={() => {
          props.onAdding(input);
          setInput("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputPutField;
