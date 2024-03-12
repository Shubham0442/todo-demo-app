import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Todo = () => {
  const [title, setTitle] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  console.log(todos);

  const addNewTodo = () => {
    if (title !== "") {
      dispatch({
        type: "ADD_NEW_TODO",
        payload: { title, isCompleted: false }
      });
      setTitle("");
    } else {
      alert("Please enter todo title");
    }
  };

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <h1>Todo</h1>
      <div>
        <input
          type="text"
          value={title}
          placeholder="Enter todo title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addNewTodo}>Add</button>
      </div>
      <div
        style={{
          width: "100%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {todos.length === 0 ? (
          <h4>No Todos Available</h4>
        ) : (
          todos?.map((el) => (
            <div
              key={el.title}
              style={{ width: "100%", display: "flex", gap: "10px" }}
            >
              <div style={{ fontSize: "14px", fontWeight: "550" }}>
                {el.title}
              </div>
              <div>{el.isCompleted ? "Done" : "Not Done"}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Todo;
