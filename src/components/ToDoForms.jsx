import { useState } from "react";

function TodoForms({ addTask }) {
  const [userInput, setUserInput] = useState("");

  const handlerChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handlerSubmit = (e) => {
    addTask(userInput);
    e.preventDefault();
    setUserInput("");
  };

  return (
    <form onSubmit={handlerSubmit}>
      <input
        type='text'
        value={userInput}
        onChange={handlerChange}
        placeholder='Введите текст'
      />
      <button>+</button>
    </form>
  );
}

export default TodoForms;
