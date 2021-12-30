import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { v4 as uuid } from "uuid";

function Todo() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "REACT",
      status: false
    },
    {
      id: 2,
      title: "PERFORMANCE",
      status: false
    }
  ]);
  const handleAdd = (title) => {
    setData([
      ...data,
      {
        id: uuid(),
        title: title,
        status: false
      }
    ]);
  };
  return (
    <div>
      <TodoInput onAdd={handleAdd} />
      {data.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          title={item.title}
          status={item.status}
        />
      ))}
    </div>
  );
}

export default Todo;
