import React, { FC } from 'react';
import './todo.css';

interface TodoProps {
  text: string;
  completed: boolean;
}
const Todo: FC<TodoProps> = ({ text, completed = true }) => {
  return (
    <>
      <div
        className="text-div"
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
      >
        {text}
      </div>
    </>
  );
};

export default Todo;
