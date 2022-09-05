import React from "react";
import Todo from "./components/Todo";

const App = () => {
  return (
    <div>
      <h1>My ToDos</h1>
      <Todo title="Washing Powder Nirma" />
      <Todo title={"Wash the car"} />
    </div>
  );
};

export default App;
