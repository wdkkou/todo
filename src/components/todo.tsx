import React, { FC } from 'react';

interface TodoProps {
  text: string;
  completed: boolean;
}
const Todo: FC<TodoProps> = ({ text, completed = true }) => {
  return (
    <>
      <div style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
      </div>
    </>
  );
};

export default Todo;
