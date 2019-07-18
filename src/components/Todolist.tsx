import React, { FC } from 'react';
import { Table, Label, Button } from 'semantic-ui-react';
import { TodosState } from '../reducer';
import './Table.css';

// export interface Todo {
//   id: number;
//   title: string;
//   description?: string;
// }

// interface TodoListProps {
//   todos: Todo[];
//   dele: (id: number) => void;
// }

interface TodoListProps {
  // todos: Todo[];
  todos: TodosState;
  dele: (id: number) => void;
}

const Todolist: FC<TodoListProps> = ({ todos, dele }) => {
  return (
    <>
      <Table celled className="table-board">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            {/* <Table.HeaderCell>Description</Table.HeaderCell> */}
          </Table.Row>
        </Table.Header>
        {todos.map((todo, index) => (
          <Table.Body key={todo.id}>
            <Table.Row>
              <Table.Cell>
                <Label>{todo.title}</Label>
              </Table.Cell>
              <Table.Cell>
                {/* {todo.description} */}
                <Button
                  type="submit"
                  className="delete-button"
                  onClick={() => dele(index)}
                >
                  delete
                </Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </>
  );
};

export default Todolist;
