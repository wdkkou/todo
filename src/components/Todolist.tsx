import React, {FC, useState} from 'react';
import {Table, Label, Button} from 'semantic-ui-react';
//import Table from './Tabletemplate';
import './Table.css';

export interface Todo {
  id: number;
  title: string;
  description?: string;
}
interface TodoListProps {
  todos: Todo[];
  // del?: () => void;
  del?: (id: number) => void;
}

const Todolist: FC<TodoListProps> = ({todos}, {del}) => {
  const [Todos, setTodos] = useState(todos);
  const del2 = (id: number) => {
    Todos.splice(id, 1);
    setTodos([...Todos]);
    console.log(id);
    console.log('delte ok');
    console.log(Todos);
  };
  return (
    <>
      <Table celled className="table-board">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {todos.map((todo, index) => (
          <Table.Body key={todo.id}>
            <Table.Row>
              <Table.Cell>
                <Label>{todo.title}</Label>
              </Table.Cell>
              <Table.Cell>
                {todo.description}
                <Button
                  type="submit"
                  className="delete-button"
                  // onClick={e => del2(index)}
                  onClick={e => del2(index)}
                >
                  delete
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row />
            <Table.Row />
          </Table.Body>
        ))}
      </Table>
    </>
  );
};

export default Todolist;
