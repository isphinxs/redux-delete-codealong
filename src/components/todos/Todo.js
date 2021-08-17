import React from 'react';

const Todo = props => {
  return (
    // <li>{props.text}</li>
    <div>
      <span>{props.todo.text}</span><button onClick={() => props.delete(props.todo.id)}>DELETE</button>
    </div>
  );
};

export default Todo;