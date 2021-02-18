import { ACTIONS } from "./App";

export default function Todo({ todo, dispatch }) {
  function toggle() {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } });
  }

  function remove() {
    dispatch({ type: ACTIONS.REMOVE_TODO, payload: { id: todo.id } });
  }

  return (
    <div>
      <span style={{ color: todo.completed ? "#AAA" : "#000" }}>
        {todo.name}
      </span>
      <button onClick={toggle}>Toggle</button>
      <button onClick={remove}>Remove</button>
    </div>
  );
}
